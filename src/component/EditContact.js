import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormGroup,
  CImg,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import Axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ContactHeader from "./Header";
import InputForm from "./InputForm";
import profile from "./../profile.jpg";

function EditContact() {
  const history = useHistory();
  const location = useLocation();
  const putData = location.data;
  const [editData, setEditData] = useState({
    firstName: putData.firstName,
    lastName: putData.lastName,
    age: putData.age,
    photo: putData.photo,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setEditData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    setShowAlert(false);
  }

  function handleEdit(e) {
    e.preventDefault();
    Axios({
      method: "PUT",
      url: "https://simple-contact-crud.herokuapp.com/contact/" + putData.id,
      data: editData,
    })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        setAlertMessage(err.response.data.message);
        setShowAlert(true);
      });
  }

  function handleCancel() {
    history.push("/");
  }
  return (
    <>
      <ContactHeader />
      <CContainer className="mt-2">
        <CAlert color="danger" closeButton fade show={showAlert}>
          <h3>Error Massage</h3>
          <p>{alertMessage}</p>
        </CAlert>
      </CContainer>
      <CContainer className="my-5">
        <CCard>
          <CCardHeader>
            <h1>Edit Contact</h1>
          </CCardHeader>
          <CCardBody>
            <CContainer>
              <CImg
                src={
                  editData.photo.includes("https") ? editData.photo : profile
                }
                alt=""
                className="d-block center mx-auto"
                style={{
                  borderRadius: "100%",
                  width: "200px",
                  height: "200px",
                }}
              />
            </CContainer>
            <CForm>
              <InputForm
                type="text"
                label="First Name"
                name="firstName"
                value={editData.firstName}
                onChange={handleChange}
              />
              <InputForm
                type="text"
                label="Last Name"
                name="lastName"
                value={editData.lastName}
                onChange={handleChange}
              />
              <InputForm
                type="text"
                label="Age"
                name="age"
                value={editData.age}
                onChange={handleChange}
              />
              <CFormGroup className="mx-5">
                <CLabel>
                  <h5>Image Link</h5>
                </CLabel>
                <CCol lg={10}>
                  <CInput
                    id="photo"
                    type="text"
                    name="photo"
                    value={editData.photo}
                    onChange={handleChange}
                  />
                </CCol>
              </CFormGroup>

              <CRow>
                <CCol lg={5} />
                <CCol lg={7} className="my-5">
                  <CButton
                    size="lg"
                    color="info"
                    className="mx-2"
                    variant="ghost"
                    onClick={handleEdit}
                  >
                    Edit
                  </CButton>
                  <CButton
                    size="lg"
                    color="danger"
                    className="mx-2"
                    variant="ghost"
                    onClick={handleCancel}
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

export default EditContact;
