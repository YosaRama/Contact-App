import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CImg,
  CRow,
} from "@coreui/react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ContactHeader from "./Header";
import profile from "./../profile.jpg";

function ShowProfile() {
  let location = useLocation();
  let history = useHistory();
  const id = location.data;
  const [Data, setData] = useState({});

  useEffect(() => {
    Axios({
      method: "GET",
      url: "https://simple-contact-crud.herokuapp.com/contact/" + id,
    }).then((res) => {
      setData(res.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleBack() {
    history.push("/");
  }
  return (
    <>
      <ContactHeader />
      <CContainer className="my-5">
        <CCard>
          <CCardHeader>
            <h1>Profile</h1>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol lg={5}>
                <CImg
                  src={
                    Data.photo !== "undefined" || Data.photo.includes("https")
                      ? Data.photo
                      : profile
                  }
                  alt=""
                  className="d-block"
                  style={{ width: "330px", height: "330px" }}
                />
              </CCol>
              <CCol lg={6} className="mx-0">
                <h1>{Data.firstName + " " + Data.lastName}</h1>
                <hr />
                <p> First Name : {Data.firstName}</p>
                <p> Last Name : {Data.lastName}</p>
                <p> Age : {Data.age}</p>
              </CCol>
            </CRow>
          </CCardBody>
          <CButton color="primary" onClick={handleBack}>
            Back
          </CButton>
        </CCard>
      </CContainer>
    </>
  );
}

export default ShowProfile;
