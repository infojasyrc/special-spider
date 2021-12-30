import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
  withStyles,
  Paper,
  FormGroup,
  TextField,
  Button,
  CardMedia,
} from '@material-ui/core'
import queryString from 'query-string'

import NoneLayout from '../hocs/NoneLayout'

import { UserContext } from '../contexts/UserContext'
import { withMessage } from '../hocs/Snackbar'
import { validateEmail } from '../tools'

// import Security from '../api/security'
import { Authentication } from '../shared/api'

import { styles } from '../styles/Login'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      password: '',
      disableLogin: true,
      loading: false,
      redirectURL: null,
      state: '',
    }

    // this.api = new Security()
    this.api = Authentication()
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)

    if (values.redirect_uri) {
      this.setState({ redirectURL: values.redirect_uri })
    }

    if (values.state) {
      this.setState({ state: values.state })
    }
  }

  verifyCredentials = () => {
    const { userName, password } = this.state

    if (userName && userName !== '' && password && password !== '') {
      this.setState({ disableLogin: false })
    }
  }

  handleTextChanged = (e) => {
    const { hideMessage } = this.props
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.verifyCredentials()
      }
    )
    hideMessage()
  }

  isValidLoginData = () => {
    const { disableLogin, userName, password } = this.state
    return !disableLogin && validateEmail(userName) && password.length > 3
  }

  handleLoginClicked = (e) => {
    e.preventDefault()
    const { showMessage, showError, hideMessage } = this.props
    const { redirectURL, state } = this.state

    hideMessage()
    showMessage('Loging in')

    this.setState({ loading: true })

    const { userName, password } = this.state

    this.api
      .login({ email: userName, password })
      .then((result) => {
        console.log('result login: ', result)
        let token = ''
        let userData
        result.user.getIdToken().then((resultToken) => {
          token = resultToken

          userData = {
            // user document -> property id
            id: '',
            uid: result.user.uid,
            // user document -> property name
            name: '',
            // user document -> property lastName
            lastName: '',
            // user document -> property avatarUrl
            avatarUrl: '',
            // user document -> property role
            role: '',
            // user document -> property isAdmin
            isAdmin: '',
          }

          this.setState(
            {
              loading: false,
            },
            () => {
              hideMessage()
            }
          )

          this.context.login(userData, token)
        })
        //const {token, user, uid, code} = result.data.data;

        if (redirectURL && state) {
          //const completeURL = redirectURL+'?state='+state+'&code='+code;
          const completeURL = redirectURL + '?state=' + state + '&code='
          window.location = completeURL
        }
      })
      .catch((err) => {
        console.error(err)
        hideMessage()
        showError(err.message ? err.message : 'Wrong username or password')
      })
  }

  render() {
    const { userName, password } = this.state
    const { classes } = this.props

    return (
      <NoneLayout>
        <div className={classes.container}>
          <Paper className={classes.form}>
            <CardMedia
              className={classes.loginLogo}
              src="https://carerite.greysignal.com/img/links/poc.png"
            ></CardMedia>
            <FormGroup>
              <TextField
                className={classes.input}
                id="userName"
                name="userName"
                label="E-mail"
                value={userName}
                margin="dense"
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{ shrink: true }}
                onChange={this.handleTextChanged}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                className={classes.input}
                id="password"
                name="password"
                type="password"
                label="Password"
                value={password}
                margin="dense"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleTextChanged}
              />
            </FormGroup>
            <FormGroup>
              <Button
                className={classes.button}
                disabled={!this.isValidLoginData()}
                // color="primary"
                type="submit"
                variant="contained"
                onClick={this.handleLoginClicked}
              >
                Log In
              </Button>
            </FormGroup>
          </Paper>
        </div>
      </NoneLayout>
    )
  }
}

Login.contextType = UserContext

export default withMessage(withRouter(withStyles(styles)(Login)))
