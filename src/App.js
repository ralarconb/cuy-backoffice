import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SharedLayout from "./pages/SharedLayout";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import SharedPagesLayout from "./pages/SharedPagesLayout";
import People from "./components/People";
import Person from "./components/Person";
import CreatePerson from "./components/CreatePerson";
import Documents from "./components/Documents";
import EditDocument from "./components/EditDocument";
import CreateDocument from "./components/CreateDocument";
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
          <Route path="people" element={<SharedPagesLayout />}>
            <Route index element={<People />} />
            <Route path=":id" element={<Person />} />
            <Route path="add" element={<CreatePerson />} />
          </Route>
          <Route path="documents" element={<SharedPagesLayout />}>
            <Route index element={<Documents />} />
            <Route path=":id" element={<EditDocument />} />
            <Route path="add" element={<CreateDocument />} />
          </Route>
          <Route path="users" element={<SharedPagesLayout />}>
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
