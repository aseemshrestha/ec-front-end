import React from 'react';
import { Link } from 'react-router-dom';

const TabBox = () => {
   return (
      <>
         <div className="about-tab-box">
            <ul className="nav nav-tabs">
               <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#mission" type="button">Our Mission</button>
               </li>
               <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#vision" type="button"> Our Vision</button>
               </li>
            </ul>

            {/* Tab Panes */}
            <div className="tab-content">
               <div className="tab-pane active" id="mission">
                  <p className="desc">Elaceat facilis voluptatibus suscipit nam. Vitae sed accusai voluptatem dolorem maiores perferendis quos obcaecati, enim nesciunt magni, nostrum laudantium.<br /><br />Quidem dolorum recusandae animi, molestiae, magnam facere nesciunt quia digniss ossilimo olley.</p>
                  <div className="about-icon-box">
                     <div className="box-item d-flex">
                        <div className="box-icon">
                           <i className="las la-check-circle"></i>
                        </div>
                        <div className="icon-text">
                           <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                        </div>
                     </div>
                     <div className="box-item d-flex">
                        <div className="box-icon">
                           <i className="las la-check-circle"></i>
                        </div>
                        <div className="icon-text">
                           <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                        </div>
                     </div>
                     <div className="box-item d-flex">
                        <div className="box-icon">
                           <i className="las la-check-circle"></i>
                        </div>
                        <div className="icon-text">
                           <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                        </div>
                     </div>
                  </div>
                  <div className="readmore-btn">
                     <Link className="link-btn" to={process.env.PUBLIC_URL + "/"}>Read More</Link>
                  </div>
               </div>
               <div className="tab-pane" id="vision">
                  <p className="desc">Elaceat facilis voluptatibus suscipit nam. Vitae sed accusai voluptatem dolorem maiores perferendis quos obcaecati, enim nesciunt magni, nostrum.<br /><br />Quidem dolorum recusandae animi, molestiae, magnam facere nesciunt quia digniss ossilimo.</p>
                  <div className="about-icon-box">
                     <div className="box-item d-flex">
                        <div className="box-icon">
                           <i className="las la-check-circle"></i>
                        </div>
                        <div className="icon-text">
                           <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor.</p>
                        </div>
                     </div>
                     <div className="box-item d-flex">
                        <div className="box-icon">
                           <i className="las la-check-circle"></i>
                        </div>
                        <div className="icon-text">
                           <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor.</p>
                        </div>
                     </div>
                     <div className="box-item d-flex">
                        <div className="box-icon">
                           <i className="las la-check-circle"></i>
                        </div>
                        <div className="icon-text">
                           <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor.</p>
                        </div>
                     </div>
                  </div>
                  <div className="readmore-btn">
                     <Link className="link-btn" to={process.env.PUBLIC_URL + "/"}>Read More</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default TabBox;
