import React, { SFC } from "react";

import UserSearch from "../UserSearch/";

const App: SFC<{}> = () => (
  <div className="app">
    <h1>Directory</h1>
    <UserSearch />
  </div>
);

export default App;
