import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
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
