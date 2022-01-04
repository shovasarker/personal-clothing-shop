import React, { Component } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { SignUpContainer, TitleText } from './sign-up.styled'

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

    if (password !== confirmPassword) {
      alert("Passwords Don't Match")
      this.setState({ confirmPassword: '' })
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
      auth.signOut()
      alert(
        'Your Sign Up is Complete, please sign in now with the email and password'
      )
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    )
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

export default SignUp
