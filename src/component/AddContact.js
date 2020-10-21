import {
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CForm,
  CFormGroup,
  CLabel,
  CCol,
  CInput,
  CButton,
  CRow,
  CAlert,
} from "@coreui/react";
import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ContactHeader from "./Header";
import InputForm from "./InputForm";
import addForm from "./_addForm";

function AddContact() {
  const history = useHistory();
  const [sendForm, setSendForm] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setSendForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    setShowAlert(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    parseInt(sendForm.age);
    Axios({
      method: "POST",
      url: "https://simple-contact-crud.herokuapp.com/contact",
      data: {
        firstName: sendForm.firstName,
        lastName: sendForm.lastName,
        age: parseInt(sendForm.age),
        photo: sendForm.photo,
      },
    })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
        setShowAlert(true);
      });
  }

  return (
    <>
      <ContactHeader />
      <CContainer className="mt-2">
        <CAlert color="danger" closeButton fade show={showAlert}>
          <h3>Error Massage</h3>
          <p>First Name, Last Name , Age is required*</p>
        </CAlert>
      </CContainer>
      <CContainer className="my-5">
        <CCard>
          <CCardHeader>
            <h1>Edit Contact</h1>
          </CCardHeader>
          <CCardBody>
            <CForm>
              {addForm.map((item, index) => {
                return (
                  <InputForm
                    key={index}
                    type={item.type}
                    label={item.label}
                    name={item.name}
                    placeholder={item.placeholder}
                    onChange={handleChange}
                  />
                );
              })}
              <CFormGroup className="mx-5">
                <CLabel>
                  <h5>Image Link</h5>
                </CLabel>
                <CCol lg={10}>
                  <CInput
                    id="photo"
                    type="link"
                    name="photo"
                    placeholder="Import your picture Link"
                    onChange={handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CRow>
                <CCol lg={4} />
                <CCol lg={8} className="my-5">
                  <CButton
                    size="lg"
                    color="success"
                    className="mx-2"
                    variant="ghost"
                    onClick={handleSubmit}
                  >
                    Submit
                  </CButton>
                  <CButton
                    size="lg"
                    color="danger"
                    className="mx-2"
                    variant="ghost"
                  >
                    Cancel
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  );
}

export default AddContact;
