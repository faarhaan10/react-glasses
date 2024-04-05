import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function Root() {
  return (
    <div className="2xl:container mx-auto">
      <NavBar />



      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
