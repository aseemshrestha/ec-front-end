import React from 'react';
import Data from '../../data/block/block-box.json';
import { Styles } from "./styles/blockBox";

const BlockBox = () => {
    return (
        <Styles>
            <section className="block-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center">
                                <h6><span>{Data.secTitle}</span></h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        {
                            Data.dataList.map((data, i) => (
                                <div className="col-lg-3 col-md-6" key={i}>
                                    <div className={data.boxClass}>
                                        <div className="block-icon">
                                            <i className={data.boxIcon}></i>
                                        </div>
                                        <div className="block-title">
                                            <h5>{data.boxTitle}</h5>
                                        </div>
                                        <div className="block-desc">
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

export default BlockBox;
