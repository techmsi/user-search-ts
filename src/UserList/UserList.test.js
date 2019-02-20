import React from "react";
import { shallow } from "enzyme";

import UserList from "./";

const SINGLE_USER_MOCK = {
  gender: "male",
  name: {
    first: "rolf",
    last: "hegdal"
  },
  email: "rolf.hegdal@example.com",
  id: "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
  avatar: "https://randomuser.me/api/portraits/med/men/65.jpg"
};

describe("UserList", () => {
  let mountedUserList = null;
  let props = null;

  beforeEach(() => {
    props = {
      users: [SINGLE_USER_MOCK]
    };
    mountedUserList = shallow(<UserList />);
  });

  it("renders UserList when users provided", () => {
    mountedUserList = shallow(<UserList {...props} />);
    expect(mountedUserList).toHaveLength(1);
  });

  it("does NOT render UserList when users are not provided", () => {
    const emptyUserList = shallow(<UserList />);
    expect(emptyUserList.type()).toEqual(null);
  });
});
