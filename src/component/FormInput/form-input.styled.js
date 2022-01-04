import styled, { css } from 'styled-components'

const subColor = 'grey'
const mainColor = 'black'

const commonStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`

export const LabelContainer = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ length }) => (length ? commonStyles : null)}
`

export const InputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  letter-spacing: ${({ type }) => type === 'password' && '0.3em'};

  &:focus {
    outline: none;
  }

  &:focus ~ ${LabelContainer} {
    ${commonStyles}
  }
`
