import {
  CToggler,
  CNavbar,
  CNavLink,
  CCollapse,
  CNavbarNav,
  CDropdownItem,
  CDropdown,
  CNavbarBrand,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import React, { useState } from "react";

function ContactHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CNavbar expandable="sm" color="info">
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
        <CNavbarBrand>Contact</CNavbarBrand>
        <CCollapse show={isOpen} navbar>
          <CNavbarNav>
            <CNavLink href="/">Home</CNavLink>
            <CNavLink href="/#/Add-Contact">Add Contact</CNavLink>
          </CNavbarNav>
          <CNavbarNav className="ml-auto">
            <CDropdown inNav>
              <CDropdownToggle color="primary">
                Yosa Rama Dinata
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Account</CDropdownItem>
                <CDropdownItem>Settings</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </>
  );
}

export default ContactHeader;
