import React, { SFC } from "react";
import User from "../User/";
import { UserListProps } from "./type.UserListProps";

const UserList: SFC<UserListProps> = ({ users }) =>
  users && users.length ? (
    <section className="page users">{users.map(User)}</section>
  ) : null;

export default UserList;
