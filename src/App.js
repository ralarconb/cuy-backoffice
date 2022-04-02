import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import People from "./components/People";
import Person from "./components/Person";
import CreatePerson from "./components/CreatePerson";
import CreateDocument from "./components/CreateDocument";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<Person />} />
          <Route path="/people/add" element={<CreatePerson />} />
          <Route path="/documents/add" element={<CreateDocument />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
