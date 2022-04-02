import React, { Component } from "react";
import axios from "axios";

export default class EditDocument extends Component {
  constructor(props) {
    super(props);

    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      code: "",
      description: "",
    };
  }

  componentDidMount1() {
    axios
      .get("http://localhost:5000/documents/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          code: response.data.code,
          description: response.data.description,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const item = {
      code: this.state.code,
      description: this.state.description,
    };

    console.log(item);

    axios
      .post(
        "http://localhost:5000/documents/update/" + this.props.match.params.id,
        item
      )
      .then((res) => console.log(res.data));

    window.location = "/documents";
  }

  render() {
    return (
      <div>
        <h3>Edit Document</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Code: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.code}
              onChange={this.onChangeCode}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Save" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
