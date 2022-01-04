import React from 'react'
import { useParams } from 'react-router-dom'

import CategorigedCollection from '../../component/CategorigedCollection'

import { CollectionPageContainer, Title } from './collection-page.styled'

const CollectionPage = () => {
  const { collectionId } = useParams()
  return (
    <CollectionPageContainer className='collection-page'>
      <Title>{collectionId.toUpperCase()}</Title>
      <CategorigedCollection collectionId={collectionId} />
    </CollectionPageContainer>
  )
}

export default CollectionPage
