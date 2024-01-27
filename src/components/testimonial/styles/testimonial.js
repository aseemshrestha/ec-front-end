import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .testimonial-area {
        padding: 195px 0 75px;
        background: ${colors.bg2};
        .sec-title {
            margin-bottom: 40px;
            h6 {
                color: ${colors.blue};
                text-transform: uppercase;
                font-weight: 600;
                display: inline-block;
                margin-bottom: 12px;
                position: relative;
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.dark};
                    width: 30px;
                    height: 2px;
                    left: 105%;
                    bottom: 10px;
                }
                &:after {
                    position: absolute;
                    content: "";
                    background: ${colors.blue};
                    width: 38px;
                    height: 2px;
                    left: 105%;
                    bottom: 6px;
                }
            }
            h3 {
                color: ${colors.dark};
                font-weight: 600;
                margin-right: 90px;
                margin-bottom: 20px;
            }
            p {
                font-size: 15px;
                color: ${colors.text2};
                letter-spacing: 0.5px;
                line-height: 27px;
            }
        }

        .testimonial-slider {
            .slick-slider {
                .slick-list {
                    margin: 0px -10px;
                    .slick-track {
                        .slick-slide {
                            padding: 0px 10px;
                            .testimonial-item {
                                background: #ffffff;
                                border-radius: 15px;
                                overflow: hidden;
                                img {
                                    float: left;
                                    max-width: 35%;

                                    @media only screen and (max-width: 1199px) {
                                        max-width: 40%;
                                    }
                                }
                                .content-box {
                                    margin-left: 35%;
                                    padding: 40px 50px 0;
                                    p {
                                        font-size: 17px;
                                        color: ${colors.text3};
                                        line-height: 32px;
                                        margin-bottom: 10px;

                                        @media only screen and (max-width: 1199px) {
                                            font-size: 15px;
                                            margin-bottom: 0;
                                        }
                                    }
                                    h5 {
                                        color: ${colors.dark};
                                        font-weight: 600;
                                        i {
                                            font-size: 30px;
                                            color: ${colors.blue};
                                            display: inline-block;
                                            transform: translateY(20%);
                                            margin-right: 5px;

                                            @media only screen and (max-width: 1199px) {
                                                font-size: 24px;
                                            }
                                        }

                                        @media only screen and (max-width: 1199px) {
                                            font-size: 17px;
                                        }
                                    }

                                    ul {
                                        transform: translateY(40%);
                                        li {
                                            margin-right: 1px;
                                            i {
                                                font-size: 16px;
                                                color: ${colors.yellow};
                                            }
                                            &:last-child {
                                                margin-right: 0;
                                            }
                                        }
                                    }

                                    @media only screen and (max-width: 1399px) {
                                        padding: 20px 25px 0;
                                    }

                                    @media only screen and (max-width: 1199px) {
                                        padding: 5px 15px 0 40px;
                                    }

                                    @media only screen and (max-width: 991px) {
                                        padding: 80px 80px 0 90px;
                                    }

                                    @media only screen and (max-width: 767px) {
                                        padding: 5px 15px 0 40px;
                                    }
                                }
                                
                            }
                        }
                    }
                }

                i.prevArrow  {
                    background: ${colors.blue};
                    color: #ffffff;
                    width: 50px;
                    height: 38px;
                    text-align: center;
                    font-size: 26px;
                    cursor: pointer;
                    padding-top: 6px;
                    padding-right: 6px;
                    position: absolute;
                    top: -80px;
                    right: 75px;
                    border-radius: 0 5px 5px 0;
                    transition: all 0.2s ease;
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 18px;
                        height: 100%;
                        top: 0;
                        left: -9px;
                        transform: skew(-25deg);
                        z-index: 1;
                        transition: all 0.2s ease;
                    }
                    &:hover {
                        background: ${colors.dark};
                        &:after {
                            background: ${colors.dark};
                        }
                    }
                }

                i.nextArrow  {
                    background: ${colors.blue};
                    color: #ffffff;
                    width: 50px;
                    height: 38px;
                    text-align: center;
                    font-size: 26px;
                    cursor: pointer;
                    padding-top: 6px;
                    padding-left: 6px;
                    position: absolute;
                    top: -80px;
                    right: 17px;
                    border-radius: 5px 0 0 5px;
                    transition: all 0.2s ease;
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 18px;
                        height: 100%;
                        top: 0;
                        right: -9px;
                        transform: skew(25deg);
                        z-index: 1;
                        transition: all 0.2s ease;
                    }
                    &:hover {
                        background: ${colors.dark};
                        &:after {
                            background: ${colors.dark};
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 991px) {
            padding: 220px 0 80px;
        }

        @media only screen and (max-width: 767px) {
            padding: 190px 0 40px;
        }

        @media only screen and (max-width: 575px) {
            padding: 300px 0 40px;
        }
    }
`;