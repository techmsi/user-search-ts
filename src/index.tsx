import React from "react";
import { render } from "react-dom";

import "./styles/theme.css";
import "./styles/reset.css";
import "./styles/radio.css";
import "./styles/layout.css";
import "./styles/user.css";
import "./styles/style.css";

import App from "./App/";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
