import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverviewContainer from '../../component/CollectionsOverview/container'
import CollectionPageContainer from '../CollectionPage/container'

import { Wrapper } from './shop-page.styled'

import { fetchCollectionsStart } from '../../redux/shop/shop.action.js'

const Shop = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<CollectionsOverviewContainer />} />
        <Route path=':collectionId' element={<CollectionPageContainer />} />
      </Routes>
    </Wrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(Shop)
