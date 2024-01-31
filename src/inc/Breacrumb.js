import React from 'react';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/breadcrumb";

export class BreadcrumbBox extends React.Component {
    state = {
        backgroundImage: '/assets/images/hero-bg.jpg',
    }

    render() {
        return (
            <Styles>
                <section className="breadcrumb-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${this.state.backgroundImage})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="breadcrumb-box d-flex justify-content-between">
                                    <div className="breadcrumb-title">
                                        <p className="page-desc">{this.props.welcome}</p>
                                        <h1 className="page-title">{this.props.title}</h1>
                                    </div>
                                    <div className="breadcrumb-content">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>Home</Link></li>
                                            <li className="breadcrumb-item active">{this.props.title}</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Styles>
        )
    }
}