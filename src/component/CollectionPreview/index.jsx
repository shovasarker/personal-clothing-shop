import React from 'react'
import CollectionItem from '../CollectionItem'
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleLink,
} from './collection-preview.styled'

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleLink to={`/shop/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </TitleLink>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
