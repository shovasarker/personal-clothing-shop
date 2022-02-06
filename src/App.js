import React, { Component } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/Homepage'
import Shop from './pages/Shop'
import Header from './component/Header'
import SignInAndSignUpPage from './pages/SignInAndSignUpPage'
import CheckoutPage from './pages/CheckoutPage'

import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { selectShopCollectionsForPreview } from './redux/shop/shop.selector'

import { GlobalStyle } from './global-styled'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(null)
      }

      // this.setState({ currentUser: user })
      // console.log(user ? user.photoURL : null)

      // addCollectionAndDocuments(
      //   'collections',
      //   collections.map(({ title, items }) => ({ title, items }))
      // )
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
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
              this.props.currentUser ? (
                <Navigate replace to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectShopCollectionsForPreview,
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
