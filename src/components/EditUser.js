import { useFetch } from "./useFetch";

const url = "http://localhost:5000/users/624ba61296aec650d1091310";

function EditUser() {
  const { loading, items } = useFetch(url);

  console.log(items);

  return (
    <div>
      <h3>Create User</h3>
    </div>
  );
}

export default EditUser;
