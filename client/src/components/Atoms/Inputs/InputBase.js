import React, { useState } from "react";
import { P } from "../Font/Font.styles.js";
import { Input, Label, InputCheckbox, InputRadio } from './Input.styles.js'

export function InputLabelBase(props) {
  const {
    forLabel,
    children
  } = props;

  return (
    <Label role="alert" htmlFor={forLabel}>{children}</Label>
  )
}

export function InputBase(props) {
  const {
    id,
    name,
    inputs,
    setInputs,
    placeholder,
    type,
    minLength,
    required,
    value,
    min,
    maxlength,
    err,
    ariaDescription
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
      aria-describedby={ariaDescription}
      id={id}
      name={name}
      onChange={e => handleChange(e)}
      minLength={minLength}
      inputs={inputs}
      setInputs={setInputs}
      placeholder={placeholder}
      required={required}
      value={value}
      min={min}
      maxlength={maxlength}
      err={err}
    />
  )
}


export function InputRadioBase(props) {
  const {
    id,
    name,
    inputs,
    setInputs,
    value,
    checked
  } = props;

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.id,
    })
  }


  return (
    <InputRadio
      id={id}
      name={name}
      onChange={e => handleChange(e)}
      inputs={inputs}
      setInputs={setInputs}
      value={value}
      checked={inputs[name] === id}
    />
  )
}

