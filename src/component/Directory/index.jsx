import React from 'react'
import { useSelector } from 'react-redux'

import MenuItem from '../MenuItem'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

import { DirectoryMenuContainer } from './directory.styled'

const Directory = () => {
  const sections = useSelector(selectDirectorySections)
  return (
    <DirectoryMenuContainer className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  )
}

export default Directory
