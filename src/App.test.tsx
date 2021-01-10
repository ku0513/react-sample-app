import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

const findByTestAttr = (wrapper: ShallowWrapper, val: string) =>
  wrapper.find(`[data-test='${val}']`);

describe("画面表示", () => {
  it("レンダリングされていること", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });

  it("初回画面表示でlistボタンが表示されていること", () => {
    const wrapper = shallow(<App />);
    const button = findByTestAttr(wrapper, "list-button");
    expect(button.length).toBe(1);
  });

  it("初回画面表示でidが0で表示されていること", () => {
    const wrapper = shallow(<App />);
    const id = findByTestAttr(wrapper, "id-text");
    expect(id.text()).toContain("0");
  });

  it("初回画面表示でnameが空で表示されていること", () => {
    const wrapper = shallow(<App />);
    const name = findByTestAttr(wrapper, "name-text");
    expect(name.text()).toContain("");
  });
});
