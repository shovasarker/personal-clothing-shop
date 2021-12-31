import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CollectionsOverview from '../../component/CollectionsOverview'
import CollectionPage from '../CollectionPage'

import './shop-page.styles.scss'

const Shop = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route path='/' element={<CollectionsOverview />} />
        <Route path=':collectionId' element={<CollectionPage />} />
      </Routes>
    </div>
  )
}

export default Shop
