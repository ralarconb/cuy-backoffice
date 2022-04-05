import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "http://localhost:5000/users/";

function Users() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetch(url);
    const items = await response.json();
    setItems(items);
    console.log(items);
  };

  useEffect(() => {
    getItems();
  }, []);

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
                      //props.deleteItem(item._id);
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
