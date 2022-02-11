import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import { signUpStart } from '../../redux/user/user.action'

import { SignUpContainer, TitleText } from './sign-up.styled'

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const dispatch = useDispatch()

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords Don't Match")
      this.setState({ confirmPassword: '' })
      return
    }

    dispatch(signUpStart({ displayName, email, password }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    })
  }
  return (
    <SignUpContainer>
      <TitleText>I do not have an account</TitleText>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm password'
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
