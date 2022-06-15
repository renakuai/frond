import React, { useState, useContext, useEffect } from "react";
import { InputBase, InputLabelBase, InputCheckboxBase, InputRadioBase } from '../../Inputs/InputBase'
import { InputDiv } from '../Form.styles.js'
import { CreateForm } from '../Form.styles.js'
import ButtonBase from '../../Buttons/ButtonBase.js';
import LinkBase from '../../Links/LinkBase.js';
import axios from 'axios';
import { PBase } from '../../Font/FontBase.js'
import { QuestionDiv } from './CreateFrond.styles';
import { Questions_pop, Questions_icebreaker, Questions_thoughtful, Questions_family, Questions_funny } from '../../Questions/Questions'

function CreateFrondBase() {


  const [inputs, setInputs] = useState({
    name: '',
    dateStart: '',
    recurring: false,
    cadence: '',
    question: [],
    sections: '',
    recipients: '',
  })

  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setInputs({
      ...inputs,
      cadence: ''
    })
  }, [inputs.recurring])

  console.log(limit)

  return (
    <CreateForm
      width="600px"
      id="signup"
      //onSubmit={(e) => handleSubmit(e)}
      alignment="end"
    >
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="name">What is the name of of your Frond?*</InputLabelBase>
        <PBase color="grey" size="small">This will also serve as the subject line of your Frond newsletter.</PBase>
        <InputBase
          type="text"
          id="name"
          name="name"
          direction="vertical"
          placeholder="Name of your Frond"
          value={inputs.name}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="dateStart">When would you like your first Frond to be sent?*</InputLabelBase>
        <InputBase
          type="date"
          id="dateStart"
          name="dateStart"
          direction="vertical"
          value={inputs.dateSent}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="horizontal">
        <InputCheckboxBase
          type="boolean"
          id="recurring"
          name="recurring"
          direction="vertical"
          value={inputs.recurring}
          inputs={inputs}
          setInputs={setInputs}
        />
        <InputLabelBase forLabel="recurring">Make this recurring</InputLabelBase>
      </InputDiv>
      {inputs.recurring && <div><InputDiv direction="horizontal">
        <InputRadioBase
          id="weekly"
          name="cadence"
          direction="vertical"
          value={inputs.cadence}
          inputs={inputs}
          setInputs={setInputs}
        />
        <InputLabelBase forLabel="cadence">Send every week</InputLabelBase>
      </InputDiv><InputDiv direction="horizontal">
          <InputRadioBase
            id="biweekly"
            name="cadence"
            direction="vertical"
            value={inputs.cadence}
            inputs={inputs}
            setInputs={setInputs}
          />
          <InputLabelBase forLabel="cadence">Send biweekly</InputLabelBase>
        </InputDiv></div>}

      <InputDiv direction="vertical">
        <InputLabelBase forLabel="name">What questions would you like to add to this Frond (3 questions max) ?</InputLabelBase>
        <PBase color="grey" size="small">If you are setting up a recurring Frond, the questions you select now will only appear in the first scheduled Frond and you will be able to select different questions for each Frond.</PBase>

        <ButtonBase width="fit-content"
          size="medium"
          type="tertiary"
          to=""
          style="underline">+ Add a custom question</ButtonBase>
        <QuestionDiv>

          <PBase weight="semibold" size="small">Icebreaker</PBase>
          {Questions_icebreaker.map((q) => (
            <InputDiv direction="horizontal">
              <InputCheckboxBase
                id={q}
                type="multiple"
                name="question"
                direction="horizontal"
                inputs={inputs}
                setInputs={setInputs}
                limit="3"
              />
              <PBase color="grey" size="small">{q}</PBase>
            </InputDiv>
          ))}

          <PBase weight="semibold" size="small">Thoughtful</PBase>
          {Questions_thoughtful.map((q) => (
            <InputDiv direction="horizontal">
              <InputCheckboxBase
                id={q}
                type="multiple"
                name="question"
                direction="horizontal"
                inputs={inputs}
                setInputs={setInputs}
                limit="3"
              />
              <PBase color="grey" size="small">{q}</PBase>
            </InputDiv>
          ))}

          <PBase weight="semibold" size="small">Funny</PBase>
          {Questions_funny.map((q) => (
            <InputDiv direction="horizontal">
              <InputCheckboxBase
                id={q}
                type="multiple"
                name="question"
                direction="horizontal"
                inputs={inputs}
                setInputs={setInputs}
                limit="3"
              />
              <PBase color="grey" size="small">{q}</PBase>
            </InputDiv>
          ))}

          <PBase weight="semibold" size="small">Family</PBase>
          {Questions_family.map((q) => (
            <InputDiv direction="horizontal">
              <InputCheckboxBase
                id={q}
                type="multiple"
                name="question"
                direction="horizontal"
                inputs={inputs}
                setInputs={setInputs}
                limit="3"
              />
              <PBase color="grey" size="small">{q}</PBase>
            </InputDiv>
          ))}

        </QuestionDiv>

      </InputDiv>

      <ButtonBase
        id="create"
        size="medium"
        type="primary"
        width="200px"
      >Create Frond</ButtonBase>
    </CreateForm>
  );
}

export default CreateFrondBase;