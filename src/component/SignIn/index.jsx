import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import './sign-in.styles.scss'

//import { useNavigate } from 'react-router-dom'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

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
    <div className='sign-in'>
      <h2> I already have an account</h2>
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
        <div className='custom-button-container'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={signIn} isGoogleSignIn>
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
