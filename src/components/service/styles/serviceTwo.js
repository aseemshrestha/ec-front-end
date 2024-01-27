import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .service-two-area {
        padding: 80px 0 0;
        background: ${colors.bg2};
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

        .service-boxes {
            margin-top: 80px;
            .service-box {
                background: #ffffff;
                padding: 25px;
                border-radius: 15px;
                margin-bottom: 30px;
                box-shadow: rgb(0 0 0 / 3%) 0px 20px 35px;
                transition: all 0.3s ease;
                .service-icon {
                    i {
                        font-size: 42px;
                        display: inline-block;
                        margin-top: 3px;

                        @media (max-width: 1199px) {
                            font-size: 36px;
                        }
                    }
                    i.icon1 {
                        color: #c0c195;
                    }
                    i.icon2 {
                        color: #88ada1;
                    }
                    i.icon3 {
                        color: #00b1e6;
                    }
                    i.icon4 {
                        color: #dc8a97;
                    }
                    i.icon5 {
                        color: #cf8fff;
                    }
                    i.icon6 {
                        color: #ff8484;
                    }
                }
                .service-content {
                    h5 {
                        color: ${colors.black2};
                        font-weight: 600;
                        margin-bottom: 12px;

                        @media (max-width: 1199px) {
                            margin-bottom: 5px;
                        }
                    }
                    p {
                        font-size: 16px;
                        color: ${colors.text2};
                    }

                    @media (max-width: 767px) {
                        text-align: left !important;
                    }
                }

                &:hover {
                    background: ${colors.dark};
                    .service-content {
                        h5 {
                            color: ${colors.border1};
                        }
                        p {
                            color: ${colors.text3};
                        }
                    }
                }

                @media (max-width: 1199px) {
                    padding: 10px 15px;
                }

                @media (max-width: 767px) {
                    flex-direction: inherit !important;
                    padding: 18px;
                }
            }

            @media (max-width: 1399px) {
                margin-top: 35px;
            }

            @media (max-width: 1199px) {
                margin-top: -15px;
            }

            @media (max-width: 991px) {
                margin-top: 0;
            }
        }

        .service-left-box {
            overflow: hidden;
            .service-box {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                position: relative;
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.bg2};
                    width: 50px;
                    height: 100%;
                    top: 0;
                    right: 94%;
                    transform: skew(-20deg);
                    z-index: 1;
                    box-shadow: inset rgb(0 0 0 / 2%) -4px 0px 8px 0px;

                    @media (max-width: 1199px) {
                        width: 40px;
                    }

                    @media (max-width: 767px) {
                        width: 30px;
                        left: 97%;
                        transform: skew(20deg);
                        z-index: 1;
                        box-shadow: inset rgb(0 0 0 / 2%) 4px 0px 8px 0px;
                    }
                }
                .service-icon {
                    i {
                        margin-left: 25px;

                        @media (max-width: 1199px) {
                            margin-left: 12px;
                        }

                        @media (max-width: 767px) {
                            margin-left: 0;
                            margin-right: 12px;
                        }
                    }
                }

                @media (max-width: 767px) {
                    border-radius: 15px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }
        }

        .service-two-image {
            text-align: center;
            img {
                max-width: 100%;
            }
        }

        .service-right-box {
            overflow: hidden;
            .service-box {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                position: relative;
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.bg2};
                    width: 50px;
                    height: 100%;
                    top: 0;
                    left: 94%;
                    transform: skew(20deg);
                    z-index: 1;
                    box-shadow: inset rgb(0 0 0 / 2%) 4px 0px 8px 0px;

                    @media (max-width: 1199px) {
                        width: 40px;
                    }

                    @media (max-width: 767px) {
                        width: 30px;
                        left: 97%;
                    }
                }
                .service-icon {
                    i {
                        margin-right: 25px;

                        @media (max-width: 1199px) {
                            margin-right: 12px;
                        }
                    }
                }
            }
        }

        @media (max-width: 991px) {
            padding: 80px 0 55px;
        }

        @media (max-width: 767px) {
            padding: 40px 0 25px;
        }
    }
`;