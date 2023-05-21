import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Products from '../Products'
import Home from '../Home'

class ProtectedRoute extends Component {
  ifElse = () => {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    return <Route {...this.props} />
  }

  render() {
    return <>{this.ifElse()}</>
  }
}

export default ProtectedRoute
