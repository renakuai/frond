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
        return Sizes.default;
    }
  }};
background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.jade[30]
      case ('secondary'):
        return Colors.white
      case ('tertiary'):
        return Colors.white
      default:
        return Colors.white
    }
  }};
border: none;
  text-decoration: none;
width: ${props => props.width};
border-radius: 4px;
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
        return Colors.jade[40]
      case ('secondary'):
        return Colors.cyan[10]
      case ('tertiary'):
        return 'none'
      default:
        return 'none'
    }
  }};
`

export const MyLink = styled(Link)`
  font-weight: ${props => {
    if (props.type === 'tertiary') {
      return Weights.regular
    }
    if (props.type === 'secondary') {
      return Weights.semibold
    }
  }};
padding: ${props => {
    switch (props.type) {
      case ('primary'):
        return '0.55rem 1.1rem';
      case ('secondary'):
        return '0.55rem 1.1rem'
      case ('tertiary'):
        return '0.5rem 0 0.5rem 0'
    }
  }};
  color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.jade[40]
      case ('tertiary'):
        return Colors.jade[40]
      default:
        return Colors.jade[40]
    }
  }};
  &:hover {
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
  };
  &:active, &:visited, &:focus, &:link {
    color: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.jade[40]
      case ('tertiary'):
        return Colors.jade[40]
      default:
        return Colors.jade[40]
    }
  }}
  };
  ${LinkStyles};
}
`

export const MyNavLink = styled(Link)`
  padding: ${Spacing[0.5]} ${Spacing[1]};
  text-decoration: ${props => {
    if (props.type === 'tertiary') {
      return 'underline'
    }
    else {
      return 'none'
    }
  }};
  color: ${Colors.grey[60]};
  &.active {
    background-color: ${Colors.grey[10]};
    color: ${Colors.jade[40]};
  };
  font-weight: ${Weights.regular};
  &:hover {
    border-radius: 8px;
    color: ${Colors.jade[30]};
  };
  ${LinkStyles};
`

export const Path = styled.path`
  stroke: ${props => {
    switch (props.type) {
      case ('primary'):
        return Colors.white
      case ('secondary'):
        return Colors.jade[30]
      case ('tertiary'):
        return Colors.jade[30]
      default:
        return Colors.grey[50]
    }
  }};
  stroke-width: 1.5;
 stroke-linecap: round;
  stroke-linejoin: round
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${Spacing[0.5]};
`