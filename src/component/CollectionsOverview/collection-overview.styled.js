import styled from 'styled-components'

export const CollectionOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 719px) {
    width: 100%;
  }

  @media (min-width: 720px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`
