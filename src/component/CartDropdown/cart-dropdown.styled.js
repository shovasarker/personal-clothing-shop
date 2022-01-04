import styled from 'styled-components'

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: ${({ length }) => (length === 0 ? '125px' : '340px')};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`

export const CartItemsContainer = styled.div`
  height: ${({ length }) => (length === 0 ? '20px' : '240px')};
  display: flex;
  flex-direction: column;
  overflow: ${({ length }) => (length === 0 ? 'hidden' : 'scroll')};

  span {
    margin: 0 auto;
  }
`
