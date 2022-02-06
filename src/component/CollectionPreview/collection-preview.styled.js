import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const TitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: bold;
  width: 0;
  &:hover {
    opacity: 0.8;
  }
`

export const PreviewContainer = styled.div`
  /* display: flex;
  gap: 15px;
  justify-content: flex-start; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    gap: 3rem;
  }
`
