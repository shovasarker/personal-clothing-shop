import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../CollectionPreview'
import { CollectionOverviewContainer } from './collection-overview.styled'

const CollectionsOverview = ({ collections }) => {
  console.log(collections)
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
