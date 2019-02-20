import React, { SFC } from "react";

import { UserType } from "./types.User";

const User: SFC<UserType> = ({ name, id, email, avatar }) => (
  <div className="module user" key={id}>
    <div className="avatar">
      <img src={avatar} alt={`${name.first} ${name.last} avatar`} />
    </div>

    <div className="col details">
      <h3 className="name">
        {name.first} {name.last}
      </h3>
      <span className="email">{email}</span>
    </div>
  </div>
);

export default User;
