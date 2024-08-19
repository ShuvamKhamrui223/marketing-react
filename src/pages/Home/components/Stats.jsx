import React from "react";

const Stats = () => {
  return (
    <>
      <section id="stats" className="stats section">
        <img src="assets/img/stats-bg.jpg" alt="" />

        <div className="container position-relative">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span className="purecounter"></span>
                <p>Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span className="purecounter"></span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span className="purecounter"></span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span className="purecounter"></span>
                <p>Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
