import React from 'react'
import { useSelector } from 'react-redux'

import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../CollectionPreview'
import { CollectionOverviewContainer } from './collection-overview.styled'

const CollectionsOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview)
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  )
}

export default CollectionsOverview
