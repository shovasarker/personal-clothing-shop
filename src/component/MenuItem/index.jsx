import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer,
  SubTitleText,
  TitleText,
} from './menu-item.styled'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate()
  return (
    <MenuItemContainer onClick={() => navigate(`/${linkUrl}`)}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <TitleText>{title.toUpperCase()}</TitleText>
        <SubTitleText>SHOP NOW</SubTitleText>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default MenuItem
