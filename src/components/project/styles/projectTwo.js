import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .project-two-area {
        padding: 80px 0 170px;
        .sec-title {
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

                span {
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.dark};
                        width: 30px;
                        height: 2px;
                        right: 105%;
                        bottom: 10px;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 38px;
                        height: 2px;
                        right: 105%;
                        bottom: 6px;
                    }
                }
            }

            h3 {
                color: ${colors.dark};
                font-weight: 600;
                max-width: 550px;
                margin: auto;
                margin-bottom: 40px;
            }
        }

        .project-gallery {
            .project-box {
                display: block;
                width: 100%;
                transition: 1s ease all;
                box-sizing: border-box;
                border-radius: 15px;
                overflow: hidden;
                margin-bottom: 20px;
                position: relative;
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.dark};
                    width: 75%;
                    height: 75px;
                    bottom: 0;
                    left: -82%;
                    transform: skew(-25deg);
                    z-index: 1;
                    visibility: hidden;
                    transition: all 0.4s ease;

                    @media (max-width: 1199px) {
                        width: 80%;
                    }
                }

                img{
                    max-width:100%; 
                    height: auto;
                    transition: all 0.3s ease 0s;
                }

                .project-content {
                    position: absolute;
                    bottom : 0;
                    left : 0;
                    width: 75%;
                    height: auto;
                    padding: 15px 20px;
                    z-index: 111;
                    background: transparent;
                    transition: all 0.3s ease 0s;
                    p.pro-group {
                        color: #ffffff;
                        font-weight: 500;
                    }
                    h6.pro-title {
                        a {
                            color : #ffffff;
                            text-transform: uppercase;
                            &:hover {
                                color : ${colors.blue};
                            }
                        }
                    }
                    span.pro-category {
                        font-size: 14px;
                        color: ${colors.border1};
                    }

                    @media (max-width: 1199px) {
                        padding: 16px 8px;
                    }
                }

                &:hover {
                    &:before {
                        visibility: visible;
                        left: -25px;
                    }
                    img {
                        transform: scale(1.1);
                    }
                }
            }
        }

        @media (max-width: 767px) {
            padding: 40px 0 145px;
        }
    }
`;