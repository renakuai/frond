import React, { useEffect, useState } from "react";
import { H3Base } from '../../../../Atoms/Font/FontBase';
import { FrondGrid } from '../../Protected.styles'
import CreateFrondBase from '../../../../Atoms/Forms/Fronds/CreateFrondBase'

function CreateFrond() {

  return (
    <section>
      <FrondGrid>
        <H3Base>Create a Frond</H3Base>
        <CreateFrondBase />
      </FrondGrid>
    </section>
  );
}

export default CreateFrond;