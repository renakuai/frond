import React, { useState } from "react";
import { Input, Label } from './Input.styles.js'

export function InputLabelBase(props) {
  const {
    id,
    children
  } = props;

  return (
    <Label htmlFor={id}>{children}</Label>
  )
}

export function InputBase(props) {
  const {
    id,
    name,
    inputs,
    setInputs,
    placeholder,
    type
  } = props;

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Input
      type={type}
      id={id}
      name={name}
      onChange={e => handleChange(e)}
      inputs={inputs}
      setInputs={setInputs}
      placeholder={placeholder}
    />
  )
}
