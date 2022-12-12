import React from "react";
import Sayac from "./packages/Sayac";
import Icons from "./packages/Icons";
import Toastify from "./packages/Toastify";
import ModalExample from "./packages/ModalExample";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Icons />
      <Sayac />
      <br></br>
      <Toastify />
      <ModalExample />
    </div>
  );
}

export default App;
