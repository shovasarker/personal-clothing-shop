import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`

export const CollectionItemContainer = styled.div`
  position: relative;
  width: auto;
  min-width: 23%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  padding-bottom: 5px;

  button {
    min-width: auto;
    width: 90%;
    position: absolute;
    padding: 0;
    top: 245px;
    display: none;
  }
  &:hover {
    ${ImageContainer} {
      opacity: 0.8;
    }
    button {
      display: flex;
      opacity: 0.85;
    }
  }
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 15px;
`

export const TextContainer = styled.span`
  width: ${({ first }) => (first ? '90%' : '10%')};
`
