import React from 'react'
import { connect } from 'react-redux'
import { selectShopCollectionItems } from '../../redux/shop/shop.selector'
import CollectionItem from '../CollectionItem'

import './categoriged-collection.styles.scss'

const CategorigedCollection = ({ collection }) => {
  return (
    <div className='items'>
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollectionItems(ownProps.collectionId)(state),
})

export default connect(mapStateToProps)(CategorigedCollection)
