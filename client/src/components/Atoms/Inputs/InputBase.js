import React, { useState } from "react";
import { P } from "../Font/Font.styles.js";
import { Input, Label, InputCheckbox, InputRadio } from './Input.styles.js'

export function InputLabelBase(props) {
  const {
    forLabel,
    children
  } = props;

  return (
    <Label htmlFor={forLabel}>{children}</Label>
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
    value
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
      minLength={minLength}
      inputs={inputs}
      setInputs={setInputs}
      placeholder={placeholder}
      required={required}
      value={value}
    />
  )
}

export function InputCheckboxBase(props) {
  const {
    id,
    name,
    inputs,
    setInputs,
    type,
    limit,
    limitedKey
  } = props;

  function handleChange(e) {
    const tgt = e.target.id;
    if (type === 'boolean') {
      if (inputs[tgt]) {
        setInputs({
          ...inputs,
          [e.target.name]: false,
        });
      }
      else {
        setInputs({
          ...inputs,
          [e.target.name]: true,
        });
      }
    }
    if (type === 'multiple') {
      if (inputs[e.target.name].includes(e.target.id)) {
        const filtered = inputs[e.target.name].filter((i) => i !== e.target.id);
        setInputs({
          ...inputs,
          [e.target.name]: filtered,
        });
      }
      else {
        setInputs({
          ...inputs,
          [e.target.name]: [...inputs[e.target.name], (e.target.id)],
        });
      }
    }
    else {
      if (inputs[e.target.name]) {
        setInputs({
          ...inputs,
          [e.target.name]: '',
        });
      }
      else {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.id,
        });
      }
    }
  }


  return (
    <InputCheckbox
      type={type}
      id={id}
      name={name}
      onChange={e => handleChange(e)}
      inputs={inputs}
      setInputs={setInputs}
      disabled={((inputs[name].length === +limit) && (!inputs[name].includes(id))) ? true : null}
    />
  )
}

export function InputRadioBase(props) {
  const {
    id,
    name,
    inputs,
    setInputs,
    value
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
    />
  )
}

