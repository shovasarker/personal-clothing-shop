import React, { Component } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'

import { SignUpContainer, TitleText } from './sign-up.styled'
import { signUpStart } from '../../redux/user/user.action'
import { connect } from 'react-redux'

export class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state
    const { signUpStart } = this.props

    if (password !== confirmPassword) {
      alert("Passwords Don't Match")
      this.setState({ confirmPassword: '' })
      return
    }

    signUpStart(displayName, email, password)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <SignUpContainer>
        <TitleText>I do not have an account</TitleText>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm password'
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
})

export default connect(null, mapDispatchToProps)(SignUp)
