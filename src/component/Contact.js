import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CDataTable,
} from "@coreui/react";
import React from "react";
import usersData from "./userData";

function Contact() {
  const fields = [
    { key: "name" },
    "registered",
    { key: "role" },
    {
      key: "status",
      label: "",
      sorter: false,
      filter: false,
      _style: { width: "5%" },
    },
  ];
  return (
    <CContainer className="my-5">
      <CCard>
        <CCardHeader>
          <h1>My Contact</h1>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={usersData}
            fields={fields}
            columnFilter
            tableFilter
            itemsPerPageSelect
            itemsPerPage={5}
            hover
            sorter
            pagination
            scopedSlots={{
              status: (item) => (
                <CButtonGroup className="my-2">
                  <CButton color="info" variant="outline">
                    Edit
                  </CButton>
                  <CButton color="danger" variant="outline">
                    Delete
                  </CButton>
                </CButtonGroup>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </CContainer>
  );
}

export default Contact;
