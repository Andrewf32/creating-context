import { Link } from "react-router-dom";

// import { useUserData } from "../../context/UserContext";

const Navbar = () => {
  // const { navigateBack } = useUserData();

  return (
    <div className="navbar-container">
      <div className="nav-links-wrapper">
        <Link to="/">Home</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/about">About</Link>

        {/* <button onClick={navigateBack}>Previous Page</button> */}
      </div>
    </div>
  );
};

export default Navbar;
