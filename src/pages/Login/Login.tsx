import { useContext, useState } from 'react'
// import { withRouter } from 'react-router-dom'
// import queryString from 'query-string'

import Login from '../../components/Login/Login'

import UserContext from '../../shared/contexts/UserContext'
// import { withMessage } from '../../hocs/Snackbar'

import { Authentication, UsersAPI } from '../../shared/api'
import { UserCredentials, UserInApp } from '../../shared/entities'

export default function LoginPage(): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [state] = useState('')
  const [redirectURL] = useState(null)

  const { login } = useContext(UserContext)

  const api = Authentication()
  const usersAPI = UsersAPI()

  const handleLoginClicked = (userName: string, password: string) => {
    // const { showMessage, showError, hideMessage } = this.props
    // const { redirectURL, state } = this.state

    // hideMessage()
    // showMessage('Loging in')

    //  componentDidMount() {
    //     const values = queryString.parse(this.props.location.search)

    //     if (values.redirect_uri) {
    //       this.setState({ redirectURL: values.redirect_uri })
    //     }

    //     if (values.state) {
    //       this.setState({ state: values.state })
    //     }
    //  }

    setLoading(true)

    api.login({ email: userName, password })
      .then((result) => {
        console.log('result login: ', result)
        let token = ''
        result.user.getIdToken().then((resultToken) => {
          token = resultToken
          usersAPI.filterByUID(result.user.uid).then(userDoc => {
            login(userDoc as UserInApp, result.user as UserCredentials, token)
            setLoading(false)
          })
        })

        if (redirectURL && state) {
          //const completeURL = redirectURL+'?state='+state+'&code='+code;
          const completeURL = redirectURL + '?state=' + state + '&code='
          window.location.href = completeURL
        }
      })
      .catch((err) => {
        console.error(err)
        // hideMessage()
        // showError(err.message ? err.message : 'Wrong username or password')
      })
  }

  return <Login onLogin={handleLoginClicked} loading={loading} />
}
