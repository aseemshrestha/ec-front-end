import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .aboutus-two-area {
        padding-bottom: 80px;
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

                    @media (max-width: 1399px) {
                        margin-bottom: 10px;
                    }
                }
                p {
                    font-size: 15px;
                    color: ${colors.text2};
                    letter-spacing: 0.5px;
                    line-height: 27px;
                    margin-bottom: 30px;

                    @media (max-width: 1399px) {
                        margin-bottom: 10px;
                    }
                }
            }

            .content-box {
                h5 {
                    color: ${colors.dark};
                    font-weight: 600;
                    margin-bottom: 12px;

                    @media (max-width: 1399px) {
                        margin-bottom: 5px;
                    }
                }
                p {
                    font-size: 15px;
                    color: ${colors.text2};
                    letter-spacing: 0.5px;
                    line-height: 27px;
                    margin-bottom: 30px;

                    @media (max-width: 1399px) {
                        margin-bottom: 10px;
                    }
                }
            }

            .profile-sign {
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

                            @media (max-width: 991px) {
                                font-size: 17px;
                            }
                        }
                        p {
                            font-size: 14px;
                            color: ${colors.text3};
                        }
                    }
                }
                .owner-sign {
                    img {
                        margin-top: 10px;
                        margin-left: 30px;

                        @media (max-width: 1399px) {
                            margin-left: 6px;
                        }
                    }
                }
            }

            @media (max-width: 767px) {
                margin-bottom: 35px;
            }
        }

        .col-md-0 {
            @media (max-width: 1199px) {
                display: none;

                .about-slider-box {
                    .slick-slider {
                        display: none;
                    }
                }
            }
        }

        .about-slider-box {
            position: relative;
            img.pattern1 {
                position: absolute;
                width: auto;
                height: auto;
                top: 50px;
                left: 0;
            }
            img.pattern2 {
                position: absolute;
                width: auto;
                height: auto;
                bottom: 50px;
                right: 0;
            }

            .about-slider {
                .slick-slider {
                    .slick-list {
                        .slick-track {
                            .slick-slide {
                                .slider-item {
                                    img {
                                        max-width: 84%;
                                        border-radius: 15px;
                                    }
                                }
                            }
                        }
                    }

                    i.prevArrow  {
                        background: ${colors.blue};
                        color: #ffffff;
                        width: 40px;
                        height: 32px;
                        text-align: center;
                        font-size: 20px;
                        cursor: pointer;
                        padding-top: 7px;
                        padding-right: 6px;
                        position: absolute;
                        bottom: 10px;
                        left: 40%;
                        z-index: 99;
                        opacity: 0.7;
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
                            opacity: 1;
                            background: ${colors.dark};
                            &:after {
                                background: ${colors.dark};
                            }
                        }
                    }

                    i.nextArrow  {
                        background: ${colors.blue};
                        color: #ffffff;
                        width: 40px;
                        height: 32px;
                        text-align: center;
                        font-size: 20px;
                        cursor: pointer;
                        padding-top: 7px;
                        padding-left: 6px;
                        position: absolute;
                        bottom: 10px;
                        right: 40%;
                        z-index: 99;
                        opacity: 0.7;
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
                            opacity: 1;
                            background: ${colors.dark};
                            &:after {
                                background: ${colors.dark};
                            }
                        }
                    }
                }
            }
        }

        .about-tab-box {
            ul.nav-tabs {
                border-bottom: 2px solid ${colors.border1};
                margin-bottom: 20px;
                padding-bottom: 10px;
                li.nav-item {
                    button.nav-link {
                        margin-right: 15px;
                        font-size: 18px;
                        color: ${colors.black1};
                        font-weight: 600;
                        border: none;
                        padding: 0;
                        text-transform: uppercase;
                        border-radius: 15px;
                    }
                    button.nav-link.active {
                        color: ${colors.blue};
                    }
                }
            }
            .tab-content {
                .tab-pane {
                    p.desc {
                        font-size: 15px;
                        color: ${colors.text2};
                        letter-spacing: 0.5px;
                        line-height: 27px;
                        margin-bottom: 30px;

                        @media (max-width: 1399px) {
                            margin-bottom: 10px;
                        }
                    }
                    .about-icon-box {
                        margin-bottom: 30px;
                        .box-item {
                            margin-bottom: 15px;
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

                        @media (max-width: 1399px) {
                            margin-bottom: 15px;
                        }
                    }

                    .readmore-btn {
                        a.link-btn {
                            font-size: 17px;
                            color: #ffffff;
                            background: ${colors.gr_bg};
                            padding: 10px 35px;
                            border-radius: 30px;
                            display: inline-block;
                            font-weight: 500;
                            margin-right: 30px;
                            &:hover {
                                background: ${colors.gr_bg2};
                            }
                        }
                    }
                }
            }
        }

        .about-counter {
            margin-top: 80px;
            .counter-box {
                i {
                    font-size: 40px;
                    display: inline-block;
                    width: 80px;
                    height: 65px;
                    margin-right: 30px;
                    padding-top: 10px;
                    padding-left: 8px;
                    text-align: center;
                    position: relative;
                    &:after {
                        position: absolute;
                        content: "";
                        width: 24px;
                        height: 100%;
                        top: 0;
                        right: -12px;
                        transform: skew(-20deg);
                        z-index: 1;

                        @media (max-width: 991px) {
                            width: 15px;
                            right: -8px;
                            transform: skew(-15deg);
                        }
                    }

                    @media (max-width: 991px) {
                        font-size: 32px;
                        width: 65px;
                        height: 55px;
                        margin-right: 15px;
                    }
                }

                i.flaticon-layers {
                    color: #c0c195;
                    background: #f3f3c9;
                    &:after {
                        background: #f3f3c9;
                    }
                }
                i.flaticon-satisfied {
                    color: #88ada1;
                    background: #d1efe5;
                    &:after {
                        background: #d1efe5;
                    }
                }
                i.flaticon-customers {
                    color: #00b1e6;
                    background: #baefff;
                    &:after {
                        background: #baefff;
                    }
                }
                i.flaticon-coffee-cup {
                    color: #dc8a97;
                    background: #fdd7dd;
                    &:after {
                        background: #fdd7dd;
                    }
                }

                h2 {
                    color: ${colors.dark};
                    font-weight: 600;
                    margin-top: 3px;
                    small {
                        font-size: 24px;
                        color: ${colors.blue};
                        display: inline-block;
                        font-weight: 500;

                        @media (max-width: 991px) {
                            font-size: 20px;
                        }
                    }

                    @media (max-width: 991px) {
                        font-size: 24px;
                        margin-top: 0;
                    }
                }
                p {
                    font-size: 14px;
                    color: ${colors.text3};
                    font-weight: 500;

                    @media (max-width: 991px) {
                        font-size: 13px;
                    }
                }

                @media (max-width: 767px) {
                    justify-content: initial !important;
                    margin-bottom: 20px;
                }
            }

            @media (max-width: 767px) {
                margin-top: 45px;
            }
        }

        @media (max-width: 767px) {
            padding-bottom: 30px;
        }
    }
`;