import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'

//import { useNavigate } from 'react-router-dom'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { CustomButtonsContainer, SignInContainer } from './sign-in.styled'
import { TitleText } from '../SignUp/sign-up.styled'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('')
      setPassword('')
      //navigate(-1)
    } catch (error) {
      console.log(error)
    }
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
    const isSignedIn = await signInWithGoogle()
    if (isSignedIn) {
      //navigate(-1)
    }
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
