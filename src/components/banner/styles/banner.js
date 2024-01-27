import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .banner-area {
        padding: 100px 0;
        position: relative;
        .banner-box {
            max-width: 77%;
            background: ${colors.dark};
            margin: auto;
            border-radius: 10px;
            position: absolute;
            width: 100%;
            top: -100%;
            left: 11.5%;

            @media only screen and (max-width: 1750px) {
                max-width: 85%;
                left: 7.5%;
            }
            @media only screen and (max-width: 1300px) {
                max-width: 95%;
                left: 2.5%;
            }

            .banner-shape {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 0 10px 10px 0;
                overflow: hidden;
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.blue};
                    width: 48%;
                    height: 100%;
                    transform: skew(-20deg);
                    top: 0;
                    right: -140px;
                }

                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }

            .banner-content {
                padding: 80px 0 40px;
                position: relative;
                z-index: 9999;
                .banner-title {
                    h6 {
                        color: ${colors.blue};
                        text-transform: uppercase;
                        font-weight: 600;
                        display: inline-block;
                        margin-bottom: 10px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: "";
                            background: #ffffff;
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
                        color: #ffffff;
                        margin-bottom: 40px;
                    }
                }
                .banner-icon-box {
                    margin-bottom: 40px;
                    i {
                        font-size: 30px;
                        color: ${colors.blue};
                        background: rgba(255, 255, 255, 0.06);
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        text-align: center;
                        border-radius: 10px;
                        padding-top: 10px;
                        margin-bottom: 20px;

                        @media only screen and (max-width: 767px) {
                            font-size: 24px;
                            width: 55px;
                            height: 55px;
                        }
                    }
                    h5 {
                        color: ${colors.border3};
                        margin-bottom: 15px;

                        @media only screen and (max-width: 767px) {
                            font-size: 18px;
                            margin-bottom: 10px;
                        }
                    }
                    p {
                        font-size: 16px;
                        color: ${colors.text5};
                        font-weight: 400;
                        @media only screen and (max-width: 767px) {
                            font-size: 15px;
                        }
                    }
                }

                @media only screen and (max-width: 767px) {
                    padding: 40px 0 0;
                }
            }

            .banner-image {
                display: block;
                width: 100%;
                height: 100%;
                .image-box {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    img {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        max-width: 70%;
                    }
                }

                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
        }
    }
`;