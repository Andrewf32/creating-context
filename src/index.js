import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
// import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <UserProvider> */}
    <App />
    {/* </UserProvider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
