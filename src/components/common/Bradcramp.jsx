import { Link } from "react-router-dom";

const Bradcramp = () => {
  return (
    <>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="current">Services Details</li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Bradcramp;
