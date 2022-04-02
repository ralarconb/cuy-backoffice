import React, { useState } from "react";
import axios from "axios";

function Users() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  axios
    .get("http://localhost:5000/users/")
    .then((response) => {
      // console.log(response.data);
      // setItems( ...items: response.data );
      setItems({ items: response.data });
      // setItems(response.data);
      // setItems({ irresponse.data });
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(items);

  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <h3>Document</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>User name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {items.map((item) => {
            return item._id;
          })} */}
        </tbody>
        {/* <tbody>{this.itemList()}</tbody> */}
      </table>
    </div>
  );
}

export default Users;
