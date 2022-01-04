import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media (min-width: 720px) {
    width: 90%;
    margin: 0 auto 25px auto;
  }

  @media (min-width: 1024px) {
    width: 80%;
    margin: 0 auto 25px auto;
  }
`

export const LogoContainer = styled(Link)`
  width: 70px;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
