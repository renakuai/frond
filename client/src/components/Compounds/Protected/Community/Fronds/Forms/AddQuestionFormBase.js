import React from "react";
import { ModalForm, ButtonDiv } from './AddQuestionFormBase.styles';
import ButtonBase from '../../../../../Atoms/Buttons/ButtonBase'

function AddQuestionFormBase(props) {

  const { setOpen } = props;

  function handleClose(e) {
    e.stopPropagation();
    setOpen(false)
  }

  return (
    <ModalForm
      id="Custom"
    >
      Hello
      <ButtonDiv><ButtonBase
        value="cancel"
        size="medium"
        btnType="tertiary"
        onClick={(e) => handleClose(e)}
      >Cancel
      </ButtonBase>
        <ButtonBase
          value="add"
          size="medium"
          btnType="primary"
          onClick={(e) => handleClose(e)}>
          Add Question
        </ButtonBase></ButtonDiv>
    </ModalForm>
  )
}

export default AddQuestionFormBase;