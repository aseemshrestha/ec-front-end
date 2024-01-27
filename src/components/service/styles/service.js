import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .service-area {
        padding: 80px 0 250px;
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
                margin-bottom: 15px;
            }
        }

        .service-box {
            transition: all 0.2s ease 0s;
            border-radius: 20px;
            padding: 20px 35px 75px;
            .title-box {
                margin-bottom: 10px;
                i {
                    font-size: 44px;
                    transform: translateY(-3%);
                }
                h4 {
                    color: ${colors.dark};
                    font-weight: 600;
                    padding-top: 15px;
                    
                    @media only screen and (max-width: 1399px) {
                        font-size: 22px;
                    }
                    @media only screen and (max-width: 1199px) {
                        font-size: 17px;
                        padding-top: 20px;
                    }
                    @media only screen and (max-width: 991px) {
                        padding-top: 10px;
                    }
                }
            }
            p {
                font-size: 17px;
                color: ${colors.text2};
                letter-spacing: 0.5px;
                line-height: 30px;
                margin-bottom: 20px;

                @media only screen and (max-width: 991px) {
                    font-size: 15px;
                }
            }
            a {
                font-size: 16px;
                color: #ffffff;
                padding-top: 9px;
                float: right;
                width: 140px;
                height: 42px;
                padding-left: 12px;
                background: ${colors.dark};
                text-align: center;
                position: relative;
                &:after {
                    position: absolute;
                    content: "";
                    background: ${colors.bg2};
                    width: 15px;
                    height: 100%;
                    top: 0;
                    left: -7px;
                    transform: skew(-18deg);
                    z-index: 1;
                }
                &:hover {
                    color: ${colors.blue};
                }
            }

            &:hover {
                box-shadow: rgb(0 0 0 / 8%) 0px 10px 20px;
                background: #ffffff;
                a {
                    background: ${colors.blue};
                    &:hover {
                        color: ${colors.dark};
                    }
                    &:after {
                        background: #ffffff;
                    }
                }
            }

            @media only screen and (max-width: 991px) {
                padding: 10px 20px 60px;
            }
        }

        .service-box.service1 {
            .title-box {
                i {
                    color: #c0c195;
                }
            }
        }
        .service-box.service2 {
            .title-box {
                i {
                    color: #88ada1;
                }
            }
        }
        .service-box.service3 {
            .title-box {
                i {
                    color: #dc8a97;
                }
            }
        }

        @media only screen and (max-width: 991px) {
            padding: 40px 0 265px;
        }

        @media only screen and (max-width: 767px) {
            padding: 40px 0 230px;
        }
    }
`;