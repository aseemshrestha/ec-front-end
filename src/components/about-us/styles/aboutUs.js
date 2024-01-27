import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .aboutus-area {
        padding-bottom: 80px;
        .about-image-box {
            position: relative;
            img.main-img {
                max-width: 90%;
                border-radius: 15px;
            }
            img.sm-img {
                position: absolute;
                bottom: 60px;
                right: 0;
                max-width: 50%;
                border: 10px solid #ffffff;
                border-radius: 15px;
            }
            img.pattern-img {
                position: absolute;
                width: auto;
                height: auto;
                top: 45px;
                right: 8px;
            }

            .icon-box {
                background: #ffffff;
                position: absolute;
                padding: 20px 0 0 20px;
                top: 50px;
                left: -35px;
                width: 195px;
                height: 90px;
                border-radius: 10px 0 0 5px;
                box-shadow: 0 12px 25px rgb(0 0 0 / 20%);
                &:after {
                    position: absolute;
                    content: "";
                    background: #ffffff;
                    width: 40px;
                    height: 100%;
                    top: 0;
                    right: -20px;
                    transform: skew(-23deg);
                    z-index: 1;
                }
                i {
                    font-size: 52px;
                    color: ${colors.blue};
                    margin-right: 5px;
                }
                p {
                    font-size: 14px;
                    color: ${colors.text3};
                    font-weight: 500;
                    margin-top: 4px;
                }
            }

            @media only screen and (max-width: 991px) {
                margin-bottom: 40px;
            }

            @media only screen and (max-width: 767px) {
                display: none;
            }
        }

        .about-content {
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
                }
                h3 {
                    color: ${colors.dark};
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 15px;
                    color: ${colors.text2};
                    letter-spacing: 0.5px;
                    line-height: 27px;
                    margin-bottom: 30px;
                }
            }

            .about-icon-box {
                margin-bottom: 30px;
                .box-item {
                    margin-bottom: 12px;
                    .box-icon {
                        i {
                            font-size: 32px;
                            color: ${colors.blue};
                            margin-right: 10px;
                            margin-top: 5px;
                        }
                    }
                    .icon-text {
                        p {
                            font-size: 15px;
                            color: ${colors.text3};
                            line-height: 25px;
                        }
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            .icon-box-img {
                background: ${colors.bg2};
                border: 1px solid ${colors.border1};
                padding: 35px;
                border-radius: 15px;
                .icon-box {
                    margin-bottom: 20px;
                    h5 {
                        color: ${colors.dark};
                        font-weight: 600;
                        margin-bottom: 12px;
                    }
                    p {
                        font-size: 15px;
                        color: ${colors.black2};
                        line-height: 28px;
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                }

                @media only screen and (max-width: 1399px) {
                    padding: 25px;
                }

                @media only screen and (max-width: 1199px) {
                    display: none;
                }
            }

            .button-profile {
                .readmore-btn {
                    a.link-btn {
                        font-size: 17px;
                        color: #ffffff;
                        background: ${colors.gr_bg};
                        padding: 12px 30px;
                        border-radius: 30px;
                        display: inline-block;
                        font-weight: 500;
                        margin-right: 30px;
                        &:hover {
                            background: ${colors.gr_bg2};
                        }

                        @media only screen and (max-width: 1399px) {
                            font-size: 16px;
                            padding: 12px 22px;
                            margin-right: 20px;
                        }
                    }
                }
                .owner-profile {
                    .owner-img {
                        img {
                            max-width: 50px;
                            border-radius: 50%;
                            margin-right: 10px;
                        }
                    }
                    .profile-text {
                        h5 {
                            color: ${colors.dark};
                            font-weight: 600;
                        }
                        p {
                            font-size: 14px;
                            color: ${colors.text3};
                        }
                    }
                    
                }
            }
        }

        @media only screen and (max-width: 767px) {
            padding-bottom: 40px;
        }
    }
`;