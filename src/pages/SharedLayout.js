import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <br />
      <Outlet />
    </div>
  );
};
export default Home;
