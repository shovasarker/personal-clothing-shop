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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 60px;

  span {
    display: none;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 0.08em;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 200px;

    span {
      display: inline;
    }
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1024px) {
    gap: 20px;
  }
`

export const OptionLink = styled(Link)`
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`
