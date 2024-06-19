import { useState } from "react";
import "./App.css";
import InputComponent from "./Components/InputComponent";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <div className="App">
      <InputComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
