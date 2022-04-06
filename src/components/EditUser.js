import { useFetch } from "./useFetch";
import { Link, useParams } from "react-router-dom";

const url = "http://localhost:5000/users/";

function onChangeName(e) {
  console.log(e.target.value);
}

function EditUser() {
  const { id } = useParams();
  const { loading, items } = useFetch(url + id);

  return (
    <div>
      <h2>Change User</h2>
      <form
      /* onSubmit={this.onSubmit}*/
      >
        <div className="form-group">
          <label>User Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={items.name}
            onChange={onChangeName}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="text"
            required
            className="form-control"
            value={items.password}
            // onChange={this.onChangePassword}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default EditUser;
