import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .project-area {
        padding: 350px 0 65px;
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

        .project-box {
            .filter-btns {
                margin-bottom : 50px;
                button.filter-btn {
                    font-size: 16px;
                    color: #ffffff;
                    padding : 8px 20px;
                    font-weight: 500;
                    cursor : pointer;
                    border: none;
                    text-transform: uppercase;
                    background: ${colors.blue};
                    margin: 0 15px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 15px;
                        height: 100%;
                        top: 0;
                        left: -7px;
                        transform: skew(-18deg);
                        z-index: 1;
                        transition: all 0.2s ease;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 15px;
                        height: 100%;
                        top: 0;
                        right: -7px;
                        transform: skew(-18deg);
                        z-index: 1;
                        transition: all 0.2s ease;
                    }
                    &:first-child {
                        &:before {
                            content: none;
                        }
                    }
                    &:last-child {
                        &:after {
                            content: none;
                        }
                    }
                    &:hover,
                    &:active,
                    &:focus {
                        color: #ffffff;
                        background: ${colors.dark};
                        &:before, &:after {
                            background: ${colors.dark};
                        }
                    }

                    @media only screen and (max-width: 991px) {
                        font-size: 15px;
                        padding: 6px 12px;
                        margin: 0 10px;
                    }

                    @media only screen and (max-width: 767px) {
                        margin-bottom: 6px;
                    }
                }
            }

            .filter-items {
                column-count: 3;
                column-gap: 18px;
                .filter-item {
                    display: block;
                    width: 100%;
                    transition: 1s ease all;
                    box-sizing: border-box;
                    border-radius: 20px;
                    overflow: hidden;
                    margin-bottom: 15px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.dark};
                        width: 85%;
                        height: 95px;
                        bottom: 0;
                        left: -92%;
                        transform: skew(-25deg);
                        z-index: 1;
                        visibility: hidden;
                        transition: all 0.4s ease;
                    }
                    img{
                        max-width:100%; 
                        height: auto;
                        transition: all 0.3s ease 0s;
                    }

                    .filter-content {
                        position: absolute;
                        bottom : 0;
                        left : 0;
                        width: 75%;
                        height: auto;
                        padding: 25px 35px;
                        z-index: 111;
                        background: transparent;
                        transition: all 0.3s ease 0s;
                        p.pro-group {
                            color: #ffffff;
                            font-weight: 500;
                        }
                        h5.pro-title {
                            a {
                                color : #ffffff;
                                text-transform: uppercase;
                                &:hover {
                                    color : ${colors.blue};
                                }

                                @media only screen and (max-width: 1199px) {
                                    font-size: 16px;
                                }
                            }
                        }
                        span.pro-category {
                            font-size: 14px;
                            color: ${colors.border1};
                        }

                        @media only screen and (max-width: 767px) {
                            padding: 25px 25px;
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

                @media only screen and (max-width: 991px) {
                    -webkit-column-count: 2;
                    column-count: 2;
                }

                @media only screen and (max-width: 533px) {
                    -webkit-column-count: 1;
                    column-count: 1;
                }
            }
        }

        @media only screen and (max-width: 1399px) {
            padding-top: 385px;
        }

        @media only screen and (max-width: 1199px) {
            padding-top: 430px;
        }
        
        @media only screen and (max-width: 991px) {
            padding: 350px 0 80px;
        }
        
        @media only screen and (max-width: 767px) {
            padding: 520px 0 40px;
        }
        
        @media only screen and (max-width: 575px) {
            padding: 480px 0 30px;
        }
        
        @media only screen and (max-width: 533px) {
            padding-top: 510px;
        }
        
        @media only screen and (max-width: 514px) {
            padding-top: 600px;
        }
        
        @media only screen and (max-width: 387px) {
            padding-top: 630px;
        }
        
        @media only screen and (max-width: 342px) {
            padding-top: 655px;
        }
    }
`;