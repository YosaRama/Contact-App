import { CCol, CFormGroup, CInput, CLabel } from "@coreui/react";
import React from "react";

function InputForm(props) {
  return (
    <CFormGroup className="mx-5">
      <CLabel>
        <h5>{props.label}</h5>
      </CLabel>
      <CCol lg={10}>
        <CInput
          id={props.id}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          valid={props.valid}
        />
      </CCol>
    </CFormGroup>
  );
}

export default InputForm;
