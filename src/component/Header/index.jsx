import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { signOutStart } from '../../redux/user/user.action'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styled'

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isHidden = useSelector(selectCartHidden)
  const dispatch = useDispatch()
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
        <>Sunrise Clothing</>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as='div'
            onClick={() => {
              dispatch(signOutStart())
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {isHidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

export default Header
