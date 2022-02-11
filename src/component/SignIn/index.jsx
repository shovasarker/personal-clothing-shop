import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.action'

import {
  CustomButtonsContainer,
  SignInContainer,
  TitleText,
} from './sign-in.styled'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(emailSignInStart({ email, password }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }
  const signIn = async (e) => {
    e.preventDefault()
    dispatch(googleSignInStart())
  }
  return (
    <SignInContainer>
      <TitleText> I already have an account</TitleText>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
          label='Password'
          required
        />
        <CustomButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={signIn} isGoogleSignIn>
            Sign In with google
          </CustomButton>
        </CustomButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
