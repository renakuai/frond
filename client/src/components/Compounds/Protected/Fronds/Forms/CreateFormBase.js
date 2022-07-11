import React, { useState, useContext, useEffect } from "react";
import { InputBase, InputLabelBase, InputRadioBase } from '../../../../Atoms/Inputs/InputBase'
import { InputErrorBase } from '../../../../Atoms/Inputs/InputErrorBase'
import { CheckboxBase } from '../../../../Atoms/Inputs/CheckboxBase'
import { InputDiv, CreateForm, QuestionDiv } from './CreateFormBase.styles'
import ButtonBase from '../../../../Atoms/Buttons/ButtonBase.js';
import { PBase } from '../../../../Atoms/Font/FontBase.js'
import { Questions } from '../../../../Atoms/Questions/Questions';
import axios from "axios";

function CreateFormBase(props) {

  const { loading, setLoading, dataSent, setDataSent, submitErr, setSubmitErr } = props.submitData

  const initialErr = {
    name: null,
    recipients: null,
    dateStart: null
  };

  const { communityMembers } = props;

  const [inputs, setInputs] = useState({
    name: '',
    dateStart: '',
    recurring: '',
    cadence: '',
    recipients: [],
  })

  const [err, setErr] = useState(initialErr)

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
        return [...inputs.recipients, user._id]
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
    else {
      setInputs({
        ...inputs,
        cadence: 'weekly'
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

  function handleSubmit(e) {
    if (handleValidation()) {
      setLoading(true);

      const inputObj = {
        ...inputs,
        questions: [...questions]
      }

      console.log(inputObj)
      axios.post('http://localhost:9000/api/communities/' + localStorage.activeCommunity + '/fronds/create', inputObj, {
        withCredentials: true,
        credentials: 'include',
      })
        .then(res => {
          setLoading(false);
          setDataSent(true)
        })
        .catch(function (error) {
          e.preventDefault();
          setSubmitErr({
            state: true,
            message: error
          });
        })
    }
    else {
      e.preventDefault();
    }
  }

  function handleValidation() {
    if (inputs.name.length < 1) {
      setErr({
        ...initialErr,
        name: 'Please fill out a name for your Frond.'
      })
      return false
    }
    if (inputs.name.length > 50) {
      setErr({
        ...initialErr,
        name: 'The name of your Frond should be less than 50 characters.'
      })
      return false
    }
    if (!inputs.recipients.length) {
      setErr({
        ...initialErr,
        recipients: 'Please select at least one recipient to send this Frond to.'
      })
      return false
    }
    if (!inputs.dateStart) {
      setErr({
        ...initialErr,
        dateStart: 'Please select a send date for this Frond.'
      })
      return false
    }
    else {
      return true;
    }
  }

  return (
    <section>
      <CreateForm
        width="inherit"
        id="signup"
        //onSubmit={(e) => handleSubmit(e)}
        alignment="end"
        noValidate
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
            maxlength="50"
            err={err.name && true}
            aria-describedby="name-error"
          />
          {err.name && <InputErrorBase id="name-error">{err.name}</InputErrorBase>}
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
            min={new Date().toLocaleDateString('en-CA')}
            err={err.dateStart && true}
            aria-describedby="date-error"
            required
          />
          {err.dateStart && <InputErrorBase id="date-error">{err.dateStart}</InputErrorBase>}
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
          <InputLabelBase forLabel="recurring" size="small">Make this recurring</InputLabelBase>
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
          {err.recipients && <InputErrorBase id="recipients-error">{err.recipients}</InputErrorBase>}
          <QuestionDiv err={err.recipients && true}>
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
              <InputLabelBase forLabel="recipients" size="small">Select all</InputLabelBase>
            </InputDiv>

            {communityMembers.map((user) => (user._id === localStorage.userId ?
              <InputDiv key={user._id + '_div'} direction="horizontal">
                <CheckboxBase
                  key="yourid"
                  id={user._id}
                  type="multiple"
                  name="recipients"
                  direction="horizontal"
                  inputs={inputs}
                  setInputs={setInputs}
                  allChecked={allChecked}
                  setAllChecked={setAllChecked}
                  required
                />
                <InputLabelBase forLabel="recipients" size="small">{'You ' + ' (' + user.email + ')'}</InputLabelBase>
              </InputDiv> : <InputDiv key={user._id + '_div'} direction="horizontal">
                <CheckboxBase
                  key={user._id}
                  id={user._id}
                  type="multiple"
                  name="recipients"
                  direction="horizontal"
                  inputs={inputs}
                  setInputs={setInputs}
                  allChecked={allChecked}
                  setAllChecked={setAllChecked}
                  required
                />
                <InputLabelBase forLabel="recipients" size="small">{user.firstName + ' ' + user.lastName + ' (' + user.email + ')'}</InputLabelBase>
              </InputDiv>))}

          </QuestionDiv>
          <InputDiv direction="vertical">
            <InputLabelBase forLabel="questions">These are the questions in your first Frond:</InputLabelBase>
            {questions.map((q, i) => (
              <PBase color="grey" key={i} size="small">{++i + '. ' + q}</PBase>
            ))}
          </InputDiv>

        </InputDiv>

        <ButtonBase
          id="create"
          size="large"
          btnType="primary"
          width="200px"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >Create Frond</ButtonBase>
      </CreateForm>

    </section>
  );
}

export default CreateFormBase;