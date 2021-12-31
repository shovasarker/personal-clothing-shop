import React from 'react'
import MenuItem from '../MenuItem'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

import './directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
