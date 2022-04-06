import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SharedLayout from "./pages/SharedLayout";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";

import People from "./components/People";
import Person from "./components/Person";
import CreatePerson from "./components/CreatePerson";
import Documents from "./components/Documents";
import EditDocument from "./components/EditDocument";
import CreateDocument from "./components/CreateDocument";

import SharedUsersLayout from "./pages/SharedUsersLayout";
import Users from "./components/Users";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<Person />} />
          <Route path="/people/add" element={<CreatePerson />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/:id" element={<EditDocument />} />
          <Route path="/documents/add" element={<CreateDocument />} />

          <Route path="users" element={<SharedUsersLayout />}>
            <Route index element={<Users />} />
            <Route path=":id" element={<EditUser />} />
            <Route path="add" element={<CreateUser />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
