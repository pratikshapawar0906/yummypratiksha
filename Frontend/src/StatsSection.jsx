import React, { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs'; // Install PureCounter using npm or yarn

const StatsSection = () => {
  useEffect(() => {
    new PureCounter(); // Initialize the PureCounter animation
  }, []);

  return (
    <section id="stats">
      <div className="row gy-4 img d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="100">
        
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100 p-3">
            <span className="purecounter" data-purecounter-start="0" data-purecounter-end="236" data-purecounter-duration="1">236</span>
            <p>Clients</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100 p-3">
            <span className="purecounter" data-purecounter-start="0"data-purecounter-end="521"data-purecounter-duration="1" >521</span>
            <p>Projects</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100 p-3">
            <span className="purecounter" data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1">1453</span>
            <p>Hours of Support</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100 p-3">
            <span className="purecounter" data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1">32</span>
            <p>Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
