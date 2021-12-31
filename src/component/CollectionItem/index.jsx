import React from 'react'
import './collection-item.styles.scss'

import { connect } from 'react-redux'

import CustomButton from '../CustomButton'
import { addItem } from '../../redux/cart/cart.action'

const CollectionItem = ({ item, addItem }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      ></div>
      <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
