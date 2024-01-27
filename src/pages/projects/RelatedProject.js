import React from 'react';
import Data from '../../data/project/rel-project.json';
import { Link } from 'react-router-dom';

const RelatedProject = () => {
   return (
      <>
         <div className="rel-project">
            <h5>Related Project</h5>
            <div className="row">
               {
                  Data.map((data, i) => (
                     <div className="col-md-3 col-sm-6" key={i}>
                        <div className="project-item">
                           <img src={process.env.PUBLIC_URL + data.imgUrl} alt="" className="img-fluid" />
                           <div className="project-content">
                              <h6 className="pro-title"><Link to={process.env.PUBLIC_URL + data.proLink}>{data.proTitle}</Link></h6>
                              <span className="pro-category">{data.category}</span>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </>
   )
}

export default RelatedProject
