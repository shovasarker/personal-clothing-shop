import React from 'react'
import { useParams } from 'react-router-dom'

import CategorigedCollection from '../../component/CategorigedCollection'

import './collection.styles.scss'

const CollectionPage = () => {
  const { collectionId } = useParams()
  return (
    <div className='collection-page'>
      <h1 className='title'>{collectionId.toUpperCase()}</h1>
      <CategorigedCollection collectionId={collectionId} />
    </div>
  )
}

export default CollectionPage
