import React from "react";

import config from "../config";
import { fetchData, getDesiredFields } from "../helpers/";

import { UserSearchState } from "./types.UserSearch";

import UserList from "../UserList/";
import GenderChoice from "../GenderChoice/";

class UserSearch extends React.Component<{}, UserSearchState> {
  state = {
    users: [],
    gender: "female"
  };

  componentDidMount() {
    this.getUsers(this.state.gender);
  }

  getUsers = gender => {
    const params = { ...config.baseParams, gender };

    fetchData(config.base, params)
      .then(users => users.map(getDesiredFields))
      .then(users => {
        this.setState({
          gender,
          users
        });
      });
  };
  render() {
    const { users, gender } = this.state;

    return (
      <div key={gender}>
        <GenderChoice gender={gender} setGender={this.getUsers} />
        <UserList key={`${gender}-user-list`} users={users} />
      </div>
    );
  }
}

export default UserSearch;
