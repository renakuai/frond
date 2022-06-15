import React, { useContext, useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Weights } from '../Font/Weights.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { NavLink, Link } from "react-router-dom"


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
        return Colors.pink[50]
      case ('secondary'):
        return Colors.white
      case ('tertiary'):
        return Colors.white
      default:
        return Colors.white
    }
  }};
border: ${props => {
    switch (props.type) {
      case ('primary'):
        return 'none'
      case ('secondary'):
        return '2px solid' + Colors.pink[20]
      case ('tertiary'):
        return 'none'
      default:
        return 'none'
    }
  }};
width: ${props => props.width};
padding: ${Spacing[0.5]} ${Spacing[1]};
text-decoration: ${props => {
    switch (props.style) {
      case ('underline'):
        return 'underline';
      default:
        return 'none'
    }
  }};
border-radius: 4px;
&:hover {
  font-weight: ${Weights.semibold};
  background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.pink[60]
      case ('secondary'):
        return Colors.pink[10]
      case ('tertiary'):
        return Colors.pink[10];
      default:
        return Colors.pink[10];
    }
  }}
`

export const MyLink = styled(Link)`
  font-weight: ${Weights.semibold};
  color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.pink[50]
      case ('tertiary'):
        return Colors.pink[50]
      default:
        return Colors.pink[50]
    }
  }};
  ${LinkStyles}
`

export const MyNavLink = styled(Link)`
  color: ${Colors.grey[70]};
  &.active {
    background-color: ${Colors.pink[10]};
    color: ${Colors.pink[50]};
    font-weight: ${Weights.semibold};
    }
  }
  ${LinkStyles};
  font-weight: ${Weights.regular};
  &:hover {
    font-weight: ${Weights.semibold};
    color: ${Colors.pink[60]};
  }
`

export const Path = styled.path`
  fill: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.pink[50]
      case ('tertiary'):
        return Colors.pink[50]
    }
  }}
`