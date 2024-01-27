import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .team-slider-area {
        padding: 80px 0;
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

        .team-slider {
            .slick-slider {
                .slick-list {
                    margin: 0px -10px;
                    .slick-track {
                        .slick-slide {
                            padding: 0px 10px;
                            .team-item {
                                padding-bottom: 20px;
                                position: relative;
                                img {
                                    border-radius: 20px;

                                    @media only screen and (max-width: 480px) {
                                        width: 100%;
                                    }
                                }
                                .img-content {
                                    position: absolute;
                                    background: #ffffff;
                                    bottom: 0;
                                    left: 35px;
                                    width: 65%;
                                    padding: 20px 0 20px 30px;
                                    border-radius: 10px 0 0 10px;
                                    transition: all 0.2s ease 0s;
                                    &:before {
                                        position: absolute;
                                        content: "";
                                        background: #ffffff;
                                        width: 40px;
                                        height: 99%;
                                        top: 0;
                                        right: -20px;
                                        transform: skew(-25deg);
                                        z-index: 1;
                                        transition: all 0.2s ease 0s;
                                    }
                                    h5 {
                                        color: ${colors.dark};
                                        font-weight: 600;
                                    }
                                    p {
                                        color: ${colors.text3};
                                    }

                                    @media only screen and (max-width: 767px) {
                                        padding: 12px 0 15px 15px;
                                    }
                                }

                                .social-box {
                                    position: absolute;
                                    top: 10%;
                                    right: 0;
                                    width: 45px;
                                    height: 107px;
                                    overflow: hidden;
                                    ul {
                                        background: #ffffff;
                                        padding: 10px;
                                        position: absolute;
                                        right: -100%;
                                        visibility: hidden;
                                        z-index: 1000;
                                        border-radius: 10px 0 0 10px;
                                        transition: all 0.3s ease 0s;
                                        li {
                                            a {
                                                padding: 5px;
                                                display: inline-block;
                                                i {
                                                    font-size: 15px;
                                                    color: ${colors.text3};
                                                    &:hover {
                                                        color: ${colors.blue} !important;
                                                    }
                                                }
                                                i.fa-facebook-f {
                                                    color: #4267b2;
                                                }
                                                i.fa-twitter {
                                                    color: #1da1f2;
                                                }
                                                i.fa-linkedin-in {
                                                    color: #2867b2;
                                                }
                                            }
                                        }
                                    }
                                }

                                &:hover {
                                    .img-content {
                                        background: ${colors.dark};
                                        &:before {
                                            background: ${colors.dark};
                                        }
                                        h5 {
                                            color: #ffffff;
                                        }
                                        p {
                                            color: ${colors.border1};
                                        }
                                    }
                                    .social-box {
                                        ul {
                                            visibility: visible;
                                            right: 0;
                                        }
                                    }
                                }

                                &:focus {
                                    outline: none;
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

        @media only screen and (max-width: 767px) {
            padding: 40px 0;
        }
    }
`;