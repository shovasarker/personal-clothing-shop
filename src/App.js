import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import HomePage from './pages/Homepage'
import Shop from './pages/Shop'
import Header from './component/Header'
import SignInAndSignUpPage from './pages/SignInAndSignUpPage'
import CheckoutPage from './pages/CheckoutPage'

import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.action'

import { GlobalStyle } from './global-styled'

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route
          path='/signin'
          element={
            currentUser ? <Navigate replace to='/' /> : <SignInAndSignUpPage />
          }
        />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}

export default App
