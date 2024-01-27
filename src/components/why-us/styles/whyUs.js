import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .why-us-area {
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        padding: 80px 0;
        position: relative;
        overflow: hidden;
        &:before {
            position: absolute;
            content: "";
            background: ${colors.dark};
            width: 100%;
            height: 100%;
            transform: skew(-41deg);
            top: 0;
            left: -30%;
            z-index: 1;

            @media (max-width: 1199px) {
                left: -35%;
                transform: skew(-28deg);
            }

            @media (max-width: 991px) {
                left: 0;
                transform: skew(0deg);
                opacity: 0.98;
            }
        }
        .container {
            position: relative;
            z-index: 1111;
            .sec-title {
                padding-right: 100px;
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
                    margin-bottom: 30px;

                    @media (max-width: 1199px) {
                        font-size: 22px;
                        margin-bottom: 15px;
                    }
                }

                @media (max-width: 1199px) {
                    padding-right: 20px;
                }
            }

            .why-us-box {
                padding-right: 100px;
                p.desc {
                    font-size: 17px;
                    color: ${colors.text5};
                    font-weight: 400;
                    line-height: 30px;
                    margin-bottom: 40px;

                    @media (max-width: 1199px) {
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                }
                .icon-boxes {
                    .icon-box {
                        margin-bottom: 40px;
                        .box-icon {
                            margin-top:12px;
                            i {
                                font-size: 32px;
                                display: inline-block;
                                background: #152E65;
                                color: ${colors.blue};
                                width: 70px;
                                height: 55px;
                                margin-right: 50px;
                                padding-top: 10px;
                                padding-left: 8px;
                                text-align: center;
                                position: relative;
                                &:after {
                                    position: absolute;
                                    content: "";
                                    width: 24px;
                                    height: 100%;
                                    background: #152E65;
                                    top: 0;
                                    right: -12px;
                                    transform: skew(-20deg);
                                    z-index: 1;
                                }

                                @media (max-width: 1199px) {
                                    font-size: 26px;
                                    width: 60px;
                                    height: 50px;
                                    margin-right: 40px;
                                }
                            }
                        }
                        .box-content {
                            h5 {
                                color: ${colors.border3};
                                margin-bottom: 8px;

                                @media (max-width: 1199px) {
                                    font-size: 18px;
                                    margin-bottom: 5px;
                                }
                            }
                            p {
                                font-size: 16px;
                                color: ${colors.text5};
                                font-weight: 400;

                                @media (max-width: 1199px) {
                                    font-size: 15px;
                                }
                            }
                        }

                        @media (max-width: 1199px) {
                            margin-bottom: 25px;
                        }
                    }
                }

                @media (max-width: 1199px) {
                    padding-right: 20px;
                }
            }

            .video-box {
                position: relative;
                img {
                    border-radius: 20px;
                }

                button.play-btn {
                    position: absolute;
                    z-index: 10;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    box-sizing: content-box;
                    display: block;
                    width: 32px;
                    height: 44px;
                    border-radius: 50%;

                    i {
                        position   : relative;
                        font-size  : 46px;
                        color      : #ffffff;
                        z-index    : 11;
                        padding-top: 0;
                        margin-left: -5px;
                    }
                    span {
                        display: none !important;
                    }

                    &::before {
                        content   : "";
                        position  : absolute;
                        z-index   : 0;
                        left      : 50%;
                        top       : 50%;
                        transform : translateX(-50%) translateY(-50%);
                        display   : block;
                        width     : 100px;
                        height    : 100px;
                        background: ${colors.blue};
                        border-radius : 50%;
                        animation: pulse-border 1500ms ease-out infinite;
                    }

                    &:after {
                        content   : "";
                        position  : absolute;
                        z-index   : 1;
                        left      : 50%;
                        top       : 50%;
                        transform : translateX(-50%) translateY(-50%);
                        display   : block;
                        width     : 85px;
                        height    : 85px;
                        background: ${colors.blue};
                        border-radius : 50%;
                        transition : all 200ms;
                    }

                    &:hover {
                        i {
                            color: ${colors.dark};
                        }
                    }

                    @keyframes pulse-border {
                        0% {
                            transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
                            opacity  : 1;
                        }

                        100% {
                            transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
                            opacity  : 0;
                        }
                    }
                }

                @media (max-width: 1399px) {
                    margin-top: 60px;
                }
            }
        }

        @media (max-width: 1399px) {
            padding: 80px 0 40px;
        }

        @media (max-width: 1199px) {
            padding: 80px 0 60px;
        }

        @media (max-width: 991px) {
            padding: 80px 0 55px;
        }

        @media (max-width: 767px) {
            padding: 35px 0 20px;
        }
    }
`;