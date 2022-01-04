import React from 'react'
import MenuItem from '../MenuItem'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selector'
import { DirectoryMenuContainer } from './directory.styled'

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
