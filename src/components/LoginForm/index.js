// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showErrorMsg: false,
  }

  onSubmitLoginForm = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitErrorMessage = errorMessage => {
    this.setState({showErrorMsg: true, errorMessage})
  }

  onSubmitUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitLoginForm()
    } else {
      this.onSubmitErrorMessage(data.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserPassword = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label htmlFor="password" className="input-box-label">
          PASSWORD
        </label>
        <input
          type="password"
          className="input-box"
          id="password"
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
      </div>
    )
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label htmlFor="username" className="input-box-label">
          USERNAME
        </label>
        <input
          type="text"
          className="input-box"
          id="username"
          placeholder="Username"
          onChange={this.onChangeUserInput}
          value={username}
        />
      </div>
    )
  }

  render() {
    const {errorMessage, showErrorMsg} = this.state

    return (
      <div className="login-container">
        <div className="log-login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <form className="login-form-container" onSubmit={this.onSubmitUser}>
          {this.renderUserName()}
          {this.renderUserPassword()}
          <button type="submit" className="submit-button">
            Login
          </button>
          {showErrorMsg && <p className="error-message">*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
