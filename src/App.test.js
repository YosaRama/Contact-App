import { shallow } from "enzyme";
import Layout from "./Layout";
import React from "react";
import ContactHeader from "./component/Header";
import Contact from "./component/Contact";
import AddContact from "./component/AddContact";

describe("rendering component", () => {
  it("render contact homepage layout without crashing", () => {
    shallow(<Layout />);
  });
  it("render Contact header without crashing", () => {
    const wrapper = shallow(<Layout />);
    const header = <ContactHeader />;
    expect(wrapper.contains(header)).toEqual(true);
  });
  it("render Contact Content without crashing", () => {
    const wrapper = shallow(<Layout />);
    const content = <Contact />;
    expect(wrapper.contains(content)).toEqual(true);
  });
  it("render Add Contact header without crashing", () => {
    const wrapper = shallow(<AddContact />);
    const content = <ContactHeader />;
    expect(wrapper.contains(content)).toEqual(true);
  });
});
