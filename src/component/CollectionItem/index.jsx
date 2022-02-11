import React from 'react'

import { useDispatch } from 'react-redux'

import CustomButton from '../CustomButton'
import { addItem } from '../../redux/cart/cart.action'

import {
  CollectionFooterContainer,
  CollectionItemContainer,
  ImageContainer,
  TextContainer,
} from './collection-item.styled'

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={item.imageUrl} />
      <CollectionFooterContainer>
        <TextContainer first>{item.name}</TextContainer>
        <TextContainer>{item.price}</TextContainer>
      </CollectionFooterContainer>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add to Cart
      </CustomButton>
    </CollectionItemContainer>
  )
}

export default CollectionItem
