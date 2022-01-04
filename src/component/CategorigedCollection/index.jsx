import React from 'react'
import { connect } from 'react-redux'
import { selectShopCollectionItems } from '../../redux/shop/shop.selector'
import CollectionItem from '../CollectionItem'
import { CollectionItemsContainer } from './categoriged-collection.styled'

const CategorigedCollection = ({ collection }) => {
  return (
    <CollectionItemsContainer>
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollectionItems(ownProps.collectionId)(state),
})

export default connect(mapStateToProps)(CategorigedCollection)
