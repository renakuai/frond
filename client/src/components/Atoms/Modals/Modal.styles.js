import React, { useContext, useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import { Sizes } from '../Font/Sizes.styles.js';
import { Weights } from '../Font/Weights.js';
import { Colors } from '../Colors/Colors.js';
import { Spacing } from '../Spacing/Spacing.styles.js';
import { NavLink, Link } from "react-router-dom"

export const Modal = styled.div`
  position: fixed;
  top: ${(window.screenTop + 81) + 'px'};
  left: calc(50% - 288px);
  width: 525px;
  max-height: 500px;
  overflow-y: scroll;
  padding: ${Spacing[1.5]};
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 2px 16px rgba(141, 141, 141, 0.25);
  border-radius: 8px;
  background-color: #fff;
`
export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Svg = styled.svg`
cursor: pointer
`
