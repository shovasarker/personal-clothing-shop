import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CollectionsOverview from '../../component/CollectionsOverview'
import CollectionPage from '../CollectionPage'
import { Wrapper } from './shop-page.styled'

//import './shop-page.styles.scss'

const Shop = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<CollectionsOverview />} />
        <Route path=':collectionId' element={<CollectionPage />} />
      </Routes>
    </Wrapper>
  )
}

export default Shop
