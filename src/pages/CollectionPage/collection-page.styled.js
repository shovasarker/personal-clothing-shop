import styled from 'styled-components'

export const CollectionPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  @media (min-width: 720px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`

export const Title = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
`
