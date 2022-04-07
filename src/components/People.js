import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Person = (props) => (
  <tr>
    <td>{props.person.familyname}</td>
    <td>{props.person.forename}</td>
    <td>{props.person.dic}</td>
    <td>{props.person.din}</td>
    <td>
      <Link to={"/edit/" + props.person._id}>Edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.person._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class People extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { people: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/people/")
      .then((response) => {
        this.setState({ people: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/people/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.people.filter((el) => el._id !== id),
    });
  }

  peopleList() {
    return this.state.people.map((person) => {
      return (
        <Person
          person={person}
          deletePerson={this.deletePerson}
          key={person._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h2>People</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Family Name</th>
              <th>Fore Name</th>
              <th>Document Code</th>
              <th>Document Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.peopleList()}</tbody>
        </table>
      </div>
    );
  }
}
