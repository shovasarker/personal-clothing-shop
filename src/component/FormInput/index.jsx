import React from 'react'

import {
  GroupContainer,
  InputContainer,
  LabelContainer,
} from './form-input.styled'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <InputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <LabelContainer length={otherProps.value.length}>
          {label}
        </LabelContainer>
      ) : null}
    </GroupContainer>
  )
}

export default FormInput
