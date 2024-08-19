import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
      <img src="assets/img/logo.png" alt="" />
      <h1 className="sitename">Append</h1>
      <span>.</span>
    </Link>
  );
};

export default Logo;
