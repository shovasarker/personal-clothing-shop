import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'

import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styled'
import { signOutStart } from '../../redux/user/user.action'

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as='div'
            onClick={() => {
              console.log(auth)
              signOutStart()
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
})
export default connect(mapStatetoProps, mapDispatchToProps)(Header)
