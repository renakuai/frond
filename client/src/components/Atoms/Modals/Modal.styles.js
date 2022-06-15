import React, { useContext, useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Weights } from '../Font/Weights.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { NavLink, Link } from "react-router-dom"


const LinkStyles = styled.dialog`
display: flex;
flex-direction: row;
align-items: center;
gap: ${Spacing[0.5]};
`

export const FormStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${Spacing[1]};
  width: ${props => {
    return props.width
  }};
  align-items: ${props => props.alignment};
  background: #FFFFFF;
`

export const ModalForm = styled.form({
  method: 'dialog'
})`
  ${FormStyles};
  padding: ${Spacing[1.5]};
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 2px 16px rgba(141, 141, 141, 0.25);
  border-radius: 8px;
`
