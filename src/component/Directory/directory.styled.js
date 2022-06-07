import styled from 'styled-components'

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
