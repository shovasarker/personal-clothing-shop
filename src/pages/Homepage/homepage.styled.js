import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
  @media (min-width: 720px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`
