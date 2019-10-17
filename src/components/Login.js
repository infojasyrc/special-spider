import React, {Component} from 'react';
import {
  withStyles,
  Paper,
  FormGroup,
  TextField,
  Button,
  CardMedia
} from '@material-ui/core';

import NoneLayout from '../hocs/NoneLayout';
import Security from '../api/security';
import {UserContext} from '../contexts/UserContext';
import {withMessage} from '../hocs/Snackbar';
import {validateEmail} from '../tools';

import {styles} from '../styles/Login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      disableLogin: true,
      loading: false
    };

    this.api = new Security();
  }

  verifyCredentials = () => {
    const {userName, password} = this.state;

    if (userName && userName !== '' && password && password !== '') {
      this.setState({disableLogin: false});
    }
  }

  handleTextChanged = (e) => {
    const {hideMessage} = this.props;
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.verifyCredentials();
    });
    hideMessage();
  }

  isValidLoginData = () => {
    const {disableLogin, userName, password} = this.state;
    return !disableLogin && validateEmail(userName) && password.length > 3;
  }

  handleLoginClicked = (e) => {
    e.preventDefault();
    const {showMessage, showError, hideMessage} = this.props;

    hideMessage();
    showMessage('Loging in');

    this.setState({loading: true});

    const {userName, password} = this.state;

    this.api.login({email: userName, password})
      .then(result => {
        if (!result.data.data.user && result.data.data.uid === '') {
          this.setState({
            loading: false
          }, () => {
            hideMessage();
            showError(result.data.message);
          });
        } else {
          const {token, user, uid} = result.data.data;

          this.setState({
            loading: false
          }, () => {
            hideMessage();
          });

          this.context.login({
            id: user.id,
            uid: uid,
            name: user.name,
            lastName: user.lastName,
            avatarUrl: user.avatarUrl,
            role: user.role,
            isAdmin: user.isAdmin
          }, token);
        }

      })
      .catch(err => {
        console.error(err);
        hideMessage();
        showError(err.message
          ? err.message
          : 'Wrong username or password');
      });
  }

  render() {
    const {userName, password} = this.state;
    const {classes} = this.props;

    return (
      <NoneLayout>
        <div className={classes.container}>
          <Paper className={classes.form}>
            <CardMedia
              className={classes.loginLogo}
            >
            </CardMedia>
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
                InputLabelProps={{shrink: true}}
                onChange={this.handleTextChanged}/>
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
                shrink: true
              }}
                onChange={this.handleTextChanged}/>
            </FormGroup>
            <FormGroup>
              <Button
                className={classes.button}
                disabled={!this.isValidLoginData()}
                color="primary"
                type="submit"
                onClick={this.handleLoginClicked}
              >
                Log In
              </Button>
            </FormGroup>
          </Paper>
        </div>
      </NoneLayout>
    );
  }
}

Login.contextType = UserContext;

export default withMessage(withStyles(styles)(Login));
