import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Item = (props) => (
  <tr>
    <td>{props.item.code}</td>
    <td>{props.item.description}</td>
    <td>
      <Link to={"/documents/" + props.item._id}>Edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteItem(props.item._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class Documents extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);

    this.state = { items: [], url: "http://localhost:5000/documents/" };
  }

  componentDidMount() {
    axios
      .get(this.state.url)
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteItem(id) {
    axios.delete(this.state.url + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      items: this.state.items.filter((el) => el._id !== id),
    });
  }

  itemList() {
    return this.state.items.map((item) => {
      return <Item item={item} deleteItem={this.deleteItem} key={item._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Document</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Code</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.itemList()}</tbody>
        </table>
      </div>
    );
  }
}
