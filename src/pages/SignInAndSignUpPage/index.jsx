import React from 'react'
import SignIn from '../../component/SignIn'
import SignUp from '../../component/SignUp'
import { SignInAndSignUpContainer } from './sign-in-and-sign-up-page.styled'

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignInAndSignUpPage
