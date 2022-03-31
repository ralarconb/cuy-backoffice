import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// let people = [];

// function exerciseList() {
//   return people.map((person) => {
//     console.log(person.name);
//     return (
//       <>currentexercise.name</>
//       // <Exercise
//       //   exercise={currentexercise}
//       //   deleteExercise={this.deleteExercise}
//       //   key={currentexercise._id}
//       // />
//     );
//   });
// }

function getPeople() {
  axios
    .get("http://localhost:5000/people/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function People() {
  const [value, setValue] = useState([]);
  let people = [];
  axios
    .get("http://localhost:5000/people/")
    .then((response) => {
      // console.log(response.data);
      // people = response.data;
      // setValue(response.data);
      console.log(people);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(people);
  return (
    <div>
      <h3>Logged People</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <tbody>{exerciseList()}</tbody> */}
      </table>
      <Link to="/">Back home</Link>
    </div>
  );
}
