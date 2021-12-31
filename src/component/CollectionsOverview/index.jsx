import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../CollectionPreview'

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => {
  console.log(collections)
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
