import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "./useFetch";

const url = "http://localhost:5000/users/";

const Item = (props) => {
  return (
    <tr>
      <td>{props.item.name}</td>
      <td>
        <Link to={"/users/" + props.item._id}>Edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            deleteItem(props.item._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

function deleteItem(id) {
  console.log(id);
}

function Users() {
  const { loading, items } = useFetch(url);

  return (
    <div>
      <h2>Users</h2>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>User Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return <Item item={item} deleteItem={deleteItem} key={item._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
