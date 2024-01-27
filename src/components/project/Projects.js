import React, { useState } from 'react';
import Data from '../../data/project/project.json';
import ProjectCategories from './ProjectCategories';
import ProjectItems from './ProjectItems';
import { Styles } from "./styles/projects";

const allCategories = ['All', ...new Set(Data.dataList.map(item => item.category))];

const Projects = () => {
    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(Data.dataList);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(Data.dataList)
            return;
        }
        const filteredData = Data.dataList.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <Styles>
            <section className="project-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center">
                                <h6><span>{Data.secTitle}</span></h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="project-box">
                                <ProjectCategories filter={filter} categories={categories} />
                                <ProjectItems menuItem={menuItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default Projects;
