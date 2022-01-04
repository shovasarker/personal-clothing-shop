import React from 'react'

import { connect } from 'react-redux'

import CustomButton from '../CustomButton'
import { addItem } from '../../redux/cart/cart.action'
import {
  CollectionFooterContainer,
  CollectionItemContainer,
  ImageContainer,
  TextContainer,
} from './collection-item.styled'

const CollectionItem = ({ item, addItem }) => {
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={item.imageUrl} />
      <CollectionFooterContainer>
        <TextContainer first>{item.name}</TextContainer>
        <TextContainer>{item.price}</TextContainer>
      </CollectionFooterContainer>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
