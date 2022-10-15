import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
    <Navbar />
    <section className='section'>
      <Outlet />
    </section>
    </div>
  );
};
export default Home;
