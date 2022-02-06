import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverviewContainer from '../../component/CollectionsOverview/container'
import CollectionPageContainer from '../CollectionPage/container'

import { Wrapper } from './shop-page.styled'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action.js'

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    return (
      <Wrapper>
        <Routes>
          <Route path='/' element={<CollectionsOverviewContainer />} />
          <Route path=':collectionId' element={<CollectionPageContainer />} />
        </Routes>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(null, mapDispatchToProps)(Shop)
