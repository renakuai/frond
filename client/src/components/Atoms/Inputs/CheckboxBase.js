import React, { useEffect, useState } from "react";
import { Input, Label, InputCheckbox, InputRadio } from './Input.styles.js'

export function CheckboxBase(props) {

  const {
    id,
    name,
    inputs,
    setInputs,
    type,
    limit,
    allChecked,
    setAllChecked,
    required,
  } = props;

  function handleChange(e) {
    const tgt = e.target.id;
    if (type === 'single') {
      console.log(e.target.id)
      if (inputs[tgt]) {
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
    if (type === 'selectall') {
      //if all were selected
      if (allChecked.allChecked) {
        setInputs({
          ...inputs,
          [e.target.name]: [],
        });
        setAllChecked({
          ...allChecked,
          allChecked: false
        });
      }
      //if all was not selected
      else {
        setInputs({
          ...inputs,
          [e.target.name]: allChecked[e.target.name],
        });
        setAllChecked({
          ...allChecked,
          allChecked: true
        });
      }
    }
  }

  function handleAllChecked() {
    if (allChecked) {
      if (type === 'selectall') {
        if (allChecked.allChecked) {
          return true
        }
        else {
          return false
        }
      }
      else {
        if (allChecked.allChecked) {
          return true
        }
        else {
          if (inputs[name].includes(id)) {
            return true
          }
          else {
            return false
          }
        }
      }
    }
    else {
      if (inputs[name].includes(id)) {
        return true
      }
      else {
        return false
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
      checked={handleAllChecked()}
      required={required}
    />
  )
}

//click select all -> check all checkboxes if allchecked is checked
//click checkbox -> if checkbox 

