import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverview from '../../component/CollectionsOverview'
import CollectionPage from '../CollectionPage'
import WithSpinner from '../../component/WithSpinner'

import { Wrapper } from './shop-page.styled'

import { updateCollections } from '../../redux/shop/shop.action.js'
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils.js'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

//import './shop-page.styles.scss'

class Shop extends Component {
  state = {
    loading: true,
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionSnapshotToMap(snapshot)
    //     updateCollections(collectionsMap)
    //     this.setState({ loading: false })
    //   }
    // )

    // !promise based firebase call instead of observables pattern
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  componentWillUnmount() {
    //this.unsubscribeFromSnapshot()
  }

  render() {
    const { loading } = this.state

    return (
      <Wrapper>
        <Routes>
          <Route
            path='/'
            element={<CollectionsOverviewWithSpinner isLoading={loading} />}
          />
          <Route
            path=':collectionId'
            element={<CollectionPageWithSpinner isLoading={loading} />}
          />
        </Routes>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(Shop)
