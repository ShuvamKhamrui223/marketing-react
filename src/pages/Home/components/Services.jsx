import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="services" className="services section">
        <div className="container section-title">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-briefcase"></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/details/service" className="stretched-link">
                      Lorem Ipsum
                    </Link>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/details/service" className="stretched-link">
                      Dolor Sitema
                    </Link>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/details/service" className="stretched-link">
                      Sed ut perspiciatis
                    </Link>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-binoculars"></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/details/service" className="stretched-link">
                      Magni Dolores
                    </Link>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-brightness-high"></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/details/service" className="stretched-link">
                      Nemo Enim
                    </Link>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/details/service" className="stretched-link">
                      Eiusmod Tempor
                    </Link>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
