import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CDataTable,
} from "@coreui/react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import ContactFields from "./ContactFields";
import Profile from "../profile.jpg";
import { useHistory } from "react-router-dom";

function Contact() {
  let history = useHistory();
  const [contactData, setcontactData] = useState([]);

  function handleClick() {
    history.push("/Add-Contact");
  }

  useEffect(() => {
    Axios({
      method: "GET",
      url: "https://simple-contact-crud.herokuapp.com/contact",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setcontactData(res.data.data);
      console.log(res.data.data[5].photo);
    });
  }, []);

  return (
    <>
      <CContainer className="my-5">
        <CCard>
          <CCardHeader>
            <h1>My Contact</h1>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              responsive
              items={contactData}
              fields={ContactFields}
              columnFilter
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              scopedSlots={{
                action: (item) => (
                  <td>
                    <CButtonGroup>
                      <CButton color="info" variant="outline">
                        Edit
                      </CButton>
                      <CButton color="danger" variant="outline">
                        Delete
                      </CButton>
                    </CButtonGroup>
                  </td>
                ),
                image: (item) => (
                  <td>
                    <CContainer>
                      <img
                        src={
                          item.photo === "N/A" || item.photo === "none"
                            ? Profile
                            : item.photo
                        }
                        alt="none"
                        style={{
                          borderRadius: "100%",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </CContainer>
                  </td>
                ),
              }}
            />
          </CCardBody>
          <CButton color="success" onClick={handleClick}>
            Add Contact
          </CButton>
        </CCard>
      </CContainer>
    </>
  );
}

export default Contact;
