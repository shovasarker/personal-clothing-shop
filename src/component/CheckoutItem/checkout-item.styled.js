import styled, { css } from 'styled-components'

const commonStyles = css`
  width: 23%;
`

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const Image = styled.img`
  width: 75%;
  height: 75%;
`

export const TextContainer = styled.span`
  ${commonStyles}
`

export const QuantityContainer = styled.div`
  ${commonStyles}
  display: flex;
`

export const ArrowContainer = styled.div`
  cursor: pointer;
`

export const QuantityValueContainer = styled.div`
  margin: 0 10px;
`

export const RemoveButtonContainer = styled.div`
  border: 1px solid rgba(161, 25, 25, 0.808);
  margin-left: 5px;
  padding: 0 5px;
  cursor: pointer;
  color: rgba(161, 25, 25, 0.808);

  &:hover {
    background-color: rgba(161, 25, 25, 0.808);
    color: white;
  }
`
