import React from 'react';
import CountUp from 'react-countup';

const AboutCounter = () => {
   return (
      <>
         <div className="about-counter">
            <div className="row">
               <div className="col-md-3 col-sm-6">
                  <div className="counter-box d-flex justify-content-center">
                     <div>
                        <i className="flaticon-layers"></i>
                     </div>
                     <div>
                        <h2><CountUp end={1370} duration={5} delay={1.5} /><small>+</small></h2>
                        <p>Projects Completed</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="counter-box d-flex justify-content-center">
                     <div>
                        <i className="flaticon-satisfied"></i>
                     </div>
                     <div>
                        <h2><CountUp end={993} duration={5} delay={1.5} /><small>+</small></h2>
                        <p>Statisfied Clients</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="counter-box d-flex justify-content-center">
                     <div>
                        <i className="flaticon-customers"></i>
                     </div>
                     <div>
                        <h2><CountUp end={373} duration={5} delay={1.5} /><small>+</small></h2>
                        <p>Active Customers</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div className="counter-box d-flex justify-content-center">
                     <div>
                        <i className="flaticon-coffee-cup"></i>
                     </div>
                     <div>
                        <h2><CountUp end={795} duration={5} delay={1.5} /><small>+</small></h2>
                        <p>Cup Of Coffee</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default AboutCounter;
