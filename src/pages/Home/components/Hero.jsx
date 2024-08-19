import React from "react";

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero section">
        <img
          src="assets/img/hero-bg.jpg"
          alt="hero image for background of welcome screen"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h2>Welcome to Our Website</h2>
              <p>
                We are team of talented designers making websites with Bootstrap
              </p>
            </div>
            <div className="col-lg-5">
              <form action="/" className="sign-up-form d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email address"
                />
                <input type="submit" className="btn btn-primary" value="Sign up" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
