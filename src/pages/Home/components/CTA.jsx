import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <section id="call-to-action" className="call-to-action section">
        <img src="assets/img/cta-bg.jpg" alt="" />

        <div className="container">
          <div className="row justify-content-center" data-aos-delay="100">
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Call To Action</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <Link className="cta-btn" to="/">
                  Call To Action
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
