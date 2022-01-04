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
  display: flex;
  gap: 15px;
  justify-content: flex-start;
`
