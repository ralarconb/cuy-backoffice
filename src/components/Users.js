import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFetch } from "./useFetch";

const url = "http://localhost:5000/users/";

function Users() {
  const { loading, items } = useFetch(url);

  const deleteItem = async (id) => {
    axios.delete(url + id).then((response) => {
      console.log(response.data);
    });
    // getItems();
  };

  return (
    <div>
      <h3>Users</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>User Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>
                  <Link to={"/users/" + item._id}>Edit</Link> |{" "}
                  <a
                    href="#"
                    onClick={() => {
                      console.log(item._id);
                      deleteItem(item._id);
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
