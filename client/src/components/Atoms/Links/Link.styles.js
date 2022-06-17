import React, { useContext, useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Weights } from '../Font/Weights.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { Shadows } from '../Shadows/Shadows.js';
import { Link } from "react-router-dom"


const LinkStyles = css`
display: flex;
flex-direction: row;
align-items: center;
gap: ${Spacing[0.5]};
font-size: ${props => {
    switch (props.size) {
      case ('large'):
        return Sizes.default
      case ('medium'):
        return Sizes.small
      case ('small'):
        return Sizes.xsmall
      default:
        break;
    }
  }};
background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.grey[70]
      case ('secondary'):
        return Colors.white
      case ('tertiary'):
        return Colors.white
      default:
        return Colors.white
    }
  }};
border: none;
box-shadow: ${props => {
    if (props.type === 'secondary') {
      return Shadows.default;
    }
    else {
      return 'none'
    }
  }};
width: ${props => props.width};
padding: ${Spacing[0.5]} ${Spacing[1]};
border-radius: 100px;
&:hover {
  box-shadow: ${props => {
    if (props.type === 'secondary') {
      return Shadows.hover;
    }
    else {
      return 'none'
    }
  }};
  background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.black
      case ('secondary'):
        return Colors.white
      case ('tertiary'):
        return 'none'
      default:
        return 'none'
    }
  }};
`

export const MyLink = styled(Link)`
  font-weight: ${Weights.regular};
  text-decoration: ${props => {
    if (props.underline) {
      return 'underline';
    }
    else {
      return 'none'
    }
  }};
  color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.grey[60]
      case ('tertiary'):
        return Colors.grey[60]
      default:
        return Colors.white
    }
  }};
  &:hover {
    color: ${props => {
    if (props.type === "tertiary") {
      return Colors.black
    }
  }}
  };
  &:active, &:visited, &:focus, &:link {
    text-decoration: ${props => {
    if (props.underline) {
      return 'underline';
    }
    else {
      return 'none'
    }
  }};
    color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.grey[60]
      case ('tertiary'):
        return Colors.grey[60]
      default:
        return Colors.white
    }
  }}
  };
  ${LinkStyles};
}
`

export const MyNavLink = styled(Link)`
text-decoration: ${props => {
    if (props.underline) {
      return 'underline';
    }
    else {
      return 'none'
    }
  }};
  color: ${Colors.grey[60]};
  &.active {
    border-radius: 8px;
    background-color: ${Colors.grey[10]};
    color: ${Colors.grey[60]};
  };
  font-weight: ${Weights.regular};
  &:hover {
    border-radius: 8px;
    color: ${Colors.black};
    background-color: ${Colors.grey[10]};
  };
  ${LinkStyles};
`

export const Path = styled.path`
  fill: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.grey[60]
      case ('tertiary'):
        return Colors.grey[60]
    }
  }}
`