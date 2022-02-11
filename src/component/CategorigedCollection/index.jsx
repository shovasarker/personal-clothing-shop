import React from 'react'
import { useSelector } from 'react-redux'
import { selectShopCollectionItems } from '../../redux/shop/shop.selector'
import CollectionItem from '../CollectionItem'
import { CollectionItemsContainer } from './categoriged-collection.styled'

const CategorigedCollection = ({ collectionId }) => {
  const collection = useSelector(selectShopCollectionItems(collectionId))
  return (
    <CollectionItemsContainer>
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  )
}

export default CategorigedCollection
