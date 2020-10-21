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
  const [isLoading, setIsLoading] = useState(true);

  function handleClick() {
    history.push("/Add-Contact");
  }

  function handleDelete(e) {
    const id = e.target.id;
    const DeleteID = contactData[id].id;

    Axios({
      method: "DELETE",
      url: "https://simple-contact-crud.herokuapp.com/contact/" + DeleteID,
    })
      .then((res) => {
        console.log(id);
        console.log(contactData[id].id);
        let deleteItem = contactData.splice(id, 1);
        setcontactData(contactData.splice(deleteItem, contactData.length));
      })
      .catch((err) => {
        console.log(err);

        ////// API DELETE ERROR ---- THIS SECTION JUST SHOW IF IT'S WORK //////

        let deleteItem = contactData.splice(id, 1);
        setcontactData(contactData.splice(deleteItem, contactData.length));
      });
  }

  function handleEdit(e) {
    const id = e.target.id;
    history.push({ pathname: "/Edit-Contact", data: contactData[id] });
  }

  function handleShow(e) {
    const id = e.target.id;
    history.push({
      pathname: "/Show-Profile",
      data: contactData[id].id,
    });
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
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <CContainer className="my-5">
        <CCard>
          <CCardHeader>
            <h1>Contact List</h1>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              responsive
              loading={isLoading}
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
                action: (item, index) => (
                  <td>
                    <CButtonGroup>
                      <CButton
                        color="primary"
                        id={index}
                        variant="ghost"
                        onClick={handleShow}
                      >
                        Show
                      </CButton>
                      <CButton
                        color="info"
                        variant="outline"
                        id={index}
                        onClick={handleEdit}
                      >
                        Edit
                      </CButton>
                      <CButton
                        color="danger"
                        variant="outline"
                        id={index}
                        onClick={handleDelete}
                      >
                        Delete
                      </CButton>
                    </CButtonGroup>
                  </td>
                ),
                image: (item) => (
                  <td>
                    <CContainer>
                      <img
                        src={item.photo.includes("http") ? item.photo : Profile}
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
