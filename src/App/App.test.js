import React from "react";
import { shallow } from "enzyme";

import App from "./";

describe("App", () => {
  let mountedApp = null;

  beforeEach(() => {
    mountedApp = shallow(<App />);
  });

  it("renders App without crashing", () => {
    expect(mountedApp).toHaveLength(1);
  });

  it("renders UserSearch", () => {
    const userSearch = mountedApp.find("UserSearch");
    expect(userSearch.length).toBe(1);
  });
});
