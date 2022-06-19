import React, { useState, useContext, useEffect } from "react";
import { InputBase, InputLabelBase, InputRadioBase } from '../../../../../Atoms/Inputs/InputBase'
import { CheckboxBase } from '../../../../../Atoms/Inputs/CheckboxBase'
import { InputDiv, CreateForm, QuestionDiv } from './CreateFormBase.styles'
import ButtonBase from '../../../../../Atoms/Buttons/ButtonBase.js';
import { PBase } from '../../../../../Atoms/Font/FontBase.js'
import { Questions } from '../../../../../Atoms/Questions/Questions';

function CreateFormBase(props) {

  const { communityMembers } = props;

  const [inputs, setInputs] = useState({
    name: '',
    dateStart: '',
    recurring: '',
    cadence: '',
    recipients: [],
  })

  const [allChecked, setAllChecked] = useState({
    allChecked: false,
    recipients: [],
  });

  const [questions, setQuestions] = useState(() => {
    const select = getQuestions();
    const array = [Questions[select[0]], Questions[select[1]], Questions[select[2]]];
    return array
  })

  useEffect(() => {
    setAllChecked({
      ...allChecked,
      recipients: (communityMembers.map((user) => {
        return [...inputs.recipients, user.email]
      }))
    });
  }, []);

  useEffect(() => {
    if (!inputs.recurring) {
      setInputs({
        ...inputs,
        cadence: ''
      })
    }
  }, [inputs.recurring])

  function getQuestions() {
    let picks = [];
    const length = Questions.length;
    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * length);
      if (!picks.includes(random)) {
        picks.push(random)
      }
      else {
        i--;
      }
    }
    return picks;
  }

  return (
    <section>
      <CreateForm
        width="inherit"
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
          <CheckboxBase
            type="single"
            id="recurring"
            name="recurring"
            direction="vertical"
            value={inputs.recurring}
            inputs={inputs}
            setInputs={setInputs}
          />
          <PBase color="grey" size="small">Make this recurring</PBase>
        </InputDiv>
        {inputs.recurring && <div><InputDiv direction="horizontal">
          <InputRadioBase
            id="weekly"
            name="cadence"
            direction="vertical"
            value={inputs.cadence}
            inputs={inputs}
            setInputs={setInputs}
            required={inputs.recurring && true}
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
              required={inputs.recurring && true}
            />
            <InputLabelBase forLabel="cadence">Send biweekly</InputLabelBase>
          </InputDiv></div>}

        <InputDiv direction="vertical">
          <InputLabelBase forLabel="recipients">Who would you like to send this Frond to?*</InputLabelBase>
          <PBase color="grey" size="small">You can only send Fronds to members of this group and you will automatically be included in each Frond you create.</PBase>

          <QuestionDiv>
            <InputDiv direction="horizontal">
              <CheckboxBase
                id="all"
                type="selectall"
                name="recipients"
                direction="horizontal"
                inputs={inputs}
                setInputs={setInputs}
                allChecked={allChecked}
                setAllChecked={setAllChecked}
              />
              <PBase color="grey" size="small">Select all</PBase>
            </InputDiv>

            {communityMembers.map((user) => (user._id !== localStorage.userId &&
              <InputDiv key={user._id + '_div'} direction="horizontal">
                <CheckboxBase
                  key={user._id}
                  id={user.email}
                  type="multiple"
                  name="recipients"
                  direction="horizontal"
                  inputs={inputs}
                  setInputs={setInputs}
                  allChecked={allChecked}
                  setAllChecked={setAllChecked}
                  required
                />
                <PBase color="grey" size="small">{user.firstName + ' ' + user.lastName + ' (' + user.email + ')'}</PBase>
              </InputDiv>
            ))}

          </QuestionDiv>
          <InputDiv direction="vertical">
            <InputLabelBase forLabel="questions">These are the questions in your first Frond:</InputLabelBase>
            {questions.map((q, i) => (
              <PBase color="grey" size="small">{++i + '. ' + q}</PBase>
            ))}
          </InputDiv>

        </InputDiv>

        <ButtonBase
          id="create"
          size="large"
          btnType="primary"
          width="200px"
          type="submit"
        >Create Frond</ButtonBase>
      </CreateForm>

    </section>
  );
}

export default CreateFormBase;