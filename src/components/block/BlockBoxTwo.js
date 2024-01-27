import React from 'react';
import Data from '../../data/block/block-box-two.json';
import { Styles } from "./styles/blockBoxTwo";

const BlockBoxTwo = () => {
    return (
        <Styles>
            <section className="block-area2">
                <div className="container">
                    <div className="row">
                        {
                            Data.map((data, i) => (
                                <div className="col-md-4" key={i}>
                                    <div className={data.boxClass}>
                                        <div className="block-icon">
                                            <i className={data.boxIcon}></i>
                                        </div>
                                        <div className="block-content">
                                            <h5>{data.boxTitle}</h5>
                                            <p>{data.boxDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default BlockBoxTwo;
