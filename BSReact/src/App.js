import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

import Forms from "./Components/Forms/Forms";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
