import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="section">
      <h1 className="text-center">
        Sorry the page you're looking for isn't availale <br />
        <i>please visit home page</i>
        <br />
        <br />
        <button>
          <Link to={"/"}>Back to home</Link>
        </button>
      </h1>
    </section>
  );
};

export default ErrorPage;
