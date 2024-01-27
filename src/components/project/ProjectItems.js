import { Link } from 'react-router-dom';

const ProjectItems = ({menuItem}) => {
    return (
        <div className="filter-items">
            {
                menuItem.map((item) => {
                    return (
                        <div className="filter-item" key={item.id}>
                            <img src={process.env.PUBLIC_URL + item.imgUrl} alt="" className="img-fluid" />
                            <div className="filter-content">
                                <h5 className="pro-title"><Link to={process.env.PUBLIC_URL + "/"}>{item.proTitle}</Link></h5>
                                <span className="pro-category">{item.category}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectItems;