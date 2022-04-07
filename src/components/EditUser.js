import { useFetch } from "./useFetch";
import { useParams } from "react-router-dom";

const url = "http://localhost:5000/users/";

function onChangeName(e) {
  console.log(e.target.value);
}

function onChangePassword(e) {
  console.log(e.target.value);
}

function onSubmit(e) {
  console.log(e);
}

function EditUser() {
  const { id } = useParams();
  const { loading, items: item } = useFetch(url + id);

  return (
    <div>
      <h2>Change User</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>User Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={item.name}
            onChange={onChangeName}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="text"
            required
            className="form-control"
            value={item.password}
            onChange={onChangePassword}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Save" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default EditUser;
