import React from 'react'
import Directory from '../../component/Directory'

import { Wrapper } from './homepage.styled'

const HomePage = (props) => {
  return (
    <Wrapper className='homepage'>
      <Directory />
    </Wrapper>
  )
}

export default HomePage
