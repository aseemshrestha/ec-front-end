import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .hero-slider-area {
        position: relative;
        overflow: hidden;
        &:before {
            position: absolute;
            content: "";
            background: #ffffff;
            width: 70%;
            height: 135px;
            bottom: -90px;
            left: 0;
            z-index: 111;
            transform: skewY(8deg);
        }

        &:after {
            position: absolute;
            content: "";
            background: #ffffff;
            width: 70%;
            height: 135px;
            bottom: -90px;
            right: 0;
            z-index: 111;
            transform: skewY(-8deg);
        }

        .slick-slider {
            .slick-list {
                .slick-track {
                    .slick-slide {
                        .slider-item {
                            position: relative;
                            overflow: hidden;
                            .image-container {
                                width   : 100%;
                                display : block;
                                overflow: hidden;
                                position: relative;
                                height  : 900px;

                                img.slider-image {
                                    width     : 100%;
                                    margin-top: 0;
                                    height: 100%;
                                }

                                @media (max-width: 991px) {
                                    height  : 700px;
                                }

                                @media (max-width: 576px) {
                                    height  : 550px;
                                }
                            }

                            .slider-table {
                                display : table;
                                width   : 100%;
                                height  : 100%;
                                position: absolute;
                                top     : 0;
                                left    : 0;
                                z-index : 9999;

                                .slider-tablecell {
                                    display       : table-cell;
                                    vertical-align: middle;

                                    .slider-box {
                                        .hero-title {
                                            opacity: 0;
                                            transform: scaleY(0);
                                            transform-origin: top;
                                            transition: all 1000ms ease;
                                            h5 {
                                                color: ${colors.border1};
                                                background: ${colors.blue};
                                                display: inline-block;
                                                padding: 6px 12px;
                                                margin-bottom: 15px;
                                                position: relative;
                                                &:before {
                                                    position: absolute;
                                                    content: "";
                                                    background: ${colors.blue};
                                                    width: 18px;
                                                    height: 100%;
                                                    top: 0;
                                                    right: -8px;
                                                    transform: skew(-23deg);
                                                    z-index: 1;
                                                }

                                                @media (max-width: 576px) {
                                                    font-size: 18px;
                                                }
                                            }
                                        }
                                        .hero-heading {
                                            opacity: 0;
                                            transform: scaleY(0);
                                            transform-origin: top;
                                            transition: all 1000ms ease;
                                            h1 {
                                                font-size: 56px;
                                                color: ${colors.dark};
                                                font-weight: 700;
                                                margin-bottom: 20px;

                                                @media (max-width: 767px) {
                                                    font-size: 42px;
                                                    line-height: 50px;
                                                }

                                                @media (max-width: 576px) {
                                                    font-size: 30px;
                                                    line-height: 36px;
                                                }
                                            }
                                        }
                                        .hero-desc {
                                            opacity: 0;
                                            transform: scaleY(0);
                                            transform-origin: top;
                                            transition: all 1000ms ease;
                                            p {
                                                font-size    : 19px;
                                                color        : ${colors.black2};
                                                margin-bottom: 35px;
                                                font-weight  : 500;
                                                line-height: 30px;

                                                @media (max-width: 576px) {
                                                    font-size: 16px;
                                                }
                                            }
                                        }
                                        .hero-btns {
                                            opacity: 0;
                                            transform: scaleY(0);
                                            transform-origin: top;
                                            transition: all 1000ms ease;
                                            a.link-btn.btn1 {
                                                font-size: 17px;
                                                color: #ffffff;
                                                background: ${colors.gr_bg};
                                                width: 160px;
                                                height: 50px;
                                                padding: 12px 28px;
                                                text-align: center;
                                                border-radius: 30px;
                                                display: inline-block;
                                                margin-right: 12px;
                                                &:hover {
                                                    background: ${colors.gr_bg2};
                                                }
                                            }
                                            a.link-btn.btn2 {
                                                font-size: 17px;
                                                color: #ffffff;
                                                background: ${colors.dark};
                                                width: 160px;
                                                height: 50px;
                                                padding: 12px 28px;
                                                text-align: center;
                                                border-radius: 30px;
                                                display: inline-block;
                                                margin-right: 12px;
                                                &:hover {
                                                    background: ${colors.blue};
                                                }
                                            }
                                        }
                                    }
                                    .slider-item-img {
                                        position: relative;
                                        width: 100%;
                                        height: 100%;
                                        img {
                                            position: absolute;
                                            bottom: -72%;
                                            right: 0;
                                            max-width: 85%;

                                            @media (max-width: 1399px) {
                                                max-width: 100%;
                                            }

                                            @media (max-width: 1199px) {
                                                bottom: -50%;
                                            }
                                        }

                                        @media (max-width: 991px) {
                                            display: none;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .slick-slide.slick-active.slick-current {
                        .slider-table {
                            .slider-tablecell {
                                .hero-title {
                                    opacity: 1;
                                    transform: scaleY(1);
                                    transition-delay: 500ms;
                                }

                                .hero-heading {
                                    opacity: 1;
                                    transform: scaleY(1);
                                    transition-delay: 500ms;
                                }

                                .hero-desc {
                                    opacity: 1;
                                    transform: scaleY(1);
                                    transition-delay: 500ms;
                                }

                                .hero-btns {
                                    opacity: 1;
                                    transform: scaleY(1);
                                    transition-delay: 500ms;
                                }

                                .slider-item-img {
                                    opacity: 1;
                                    transform: scaleX(1);
                                    transition-delay: 500ms;
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
                height: 40px;
                text-align: center;
                font-size: 28px;
                cursor: pointer;
                padding-top: 7px;
                padding-right: 6px;
                position: absolute;
                top: 47%;
                left: 3%;
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
                width: 50px;
                height: 40px;
                text-align: center;
                font-size: 28px;
                cursor: pointer;
                padding-top: 7px;
                padding-left: 6px;
                position: absolute;
                top: 47%;
                right: 3%;
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
`;