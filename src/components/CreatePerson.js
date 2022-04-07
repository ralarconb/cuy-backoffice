import React, { Component } from "react";
import axios from "axios";

export default class CreatePerson extends Component {
  constructor(props) {
    super(props);

    this.onChangeFamilyname = this.onChangeFamilyname.bind(this);
    this.onChangeForename = this.onChangeForename.bind(this);
    this.onChangeDic = this.onChangeDic.bind(this);
    this.onChangeDin = this.onChangeDin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      familyname: "",
      forename: "",
      dic: 1,
      din: "",
    };
  }

  onChangeFamilyname(e) {
    this.setState({
      familyname: e.target.value,
    });
  }

  onChangeForename(e) {
    this.setState({
      forename: e.target.value,
    });
  }

  onChangeDic(e) {
    this.setState({
      dic: e.target.value,
    });
  }

  onChangeDin(e) {
    this.setState({
      din: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const person = {
      familyname: this.state.familyname,
      forename: this.state.forename,
      dic: this.state.dic,
      din: this.state.din,
    };

    console.log(person);

    axios
      .post("http://localhost:5000/people/add", person)
      .then((res) => console.log(res.data));

    window.location = "/people";
  }

  render() {
    return (
      <div>
        <h2>Create Form</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Family name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.familyname}
              onChange={this.onChangeFamilyname}
            />
          </div>
          <div className="form-group">
            <label>Fore name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.forename}
              onChange={this.onChangeForename}
            />
          </div>
          <div className="form-group">
            <label>Document Code: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.dic}
              onChange={this.onChangeDic}
            />
          </div>
          <div className="form-group">
            <label>Document Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.din}
              onChange={this.onChangeDin}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Item"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
