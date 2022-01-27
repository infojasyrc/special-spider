import { useContext, useState } from 'react'
// import { withRouter } from 'react-router-dom'
// import queryString from 'query-string'

import Login from '../../components/Login/Login'

// import { UserContext } from '../../contexts/UserContext'
import UserContext from '../../shared/contexts/UserContext'
// import { withMessage } from '../../hocs/Snackbar'

import { Authentication } from '../../shared/api'
import { User } from '../../shared/entities'

export default function LoginPage(): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [state] = useState('')
  const [redirectURL] = useState(null)

  const { login } = useContext(UserContext)

  const api = Authentication()

  const handleLoginClicked = (userName: string, password: string) => {
    // const { showMessage, showError, hideMessage } = this.props
    // const { redirectURL, state } = this.state

    // hideMessage()
    // showMessage('Loging in')

    setLoading(true)

    api.login({ email: userName, password })
      .then((result) => {
        console.log('result login: ', result)
        let token = ''
        result.user.getIdToken().then((resultToken) => {
          token = resultToken

          const userData: User = {
            // user document -> property id
            id: '',
            uid: result.user.uid,
            // user document -> property name
            firstName: '',
            // user document -> property lastName
            lastName: '',
            // user document -> property avatarUrl
            avatarUrl: '',
            // user document -> property role
            role: '',
            // user document -> property isAdmin
            isAdmin: false,
          }
          setLoading(false)
          login(userData, token)
        })
        //const {token, user, uid, code} = result.data.data;

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

// class LoginPage extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       loading: false,
//       redirectURL: null,
//       state: '',
//     }

//     this.api = Authentication()
//   }

//   componentDidMount() {
//     const values = queryString.parse(this.props.location.search)

//     if (values.redirect_uri) {
//       this.setState({ redirectURL: values.redirect_uri })
//     }

//     if (values.state) {
//       this.setState({ state: values.state })
//     }
//   }

//   handleLoginClicked = (userName, password) => {
//     const { showMessage, showError, hideMessage } = this.props
//     const { redirectURL, state } = this.state

//     hideMessage()
//     showMessage('Loging in')

//     this.setState({ loading: true })

//     this.api
//       .login({ email: userName, password })
//       .then((result) => {
//         console.log('result login: ', result)
//         let token = ''
//         let userData
//         result.user.getIdToken().then((resultToken) => {
//           token = resultToken

//           userData = {
//             // user document -> property id
//             id: '',
//             uid: result.user.uid,
//             // user document -> property name
//             name: '',
//             // user document -> property lastName
//             lastName: '',
//             // user document -> property avatarUrl
//             avatarUrl: '',
//             // user document -> property role
//             role: '',
//             // user document -> property isAdmin
//             isAdmin: '',
//           }

//           this.setState(
//             {
//               loading: false,
//             },
//             () => {
//               hideMessage()
//             }
//           )

//           this.context.login(userData, token)
//         })
//         //const {token, user, uid, code} = result.data.data;

//         if (redirectURL && state) {
//           //const completeURL = redirectURL+'?state='+state+'&code='+code;
//           const completeURL = redirectURL + '?state=' + state + '&code='
//           window.location = completeURL
//         }
//       })
//       .catch((err) => {
//         console.error(err)
//         hideMessage()
//         showError(err.message ? err.message : 'Wrong username or password')
//       })
//   }

//   render() {
//     return <Login onLogin={this.handleLoginClicked} />
//   }
// }

// LoginPage.contextType = UserContext

// export default withMessage(withRouter(withStyles(styles)(LoginPage)))
