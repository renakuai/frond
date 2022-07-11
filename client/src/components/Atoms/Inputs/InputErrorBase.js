import React, { useState } from "react";
import { Error } from './InputError.styles.js'

export function InputErrorBase(props) {
  const {
    children
  } = props;

  return (
    <Error role="alert">{children}</Error>
  )
}