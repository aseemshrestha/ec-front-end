import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .hero-image-area {
        background-size    : cover;
        background-position: center;
        background-repeat  : no-repeat;
        height: 800px;
        overflow: hidden;
        position: relative;

        @media only screen and (max-width: 991px) {
            height: 550px;
        }

        @media only screen and (max-width: 576px) {
            height: 400px;
        }

        .hero-table {
            display : table;
            width   : 100%;
            height  : 100%;
            position: relative;
            z-index : 2;
            .hero-tablecell {
                display       : table-cell;
                vertical-align: middle;
                .hero-box {

                    @media only screen and (max-width: 767px) {
                        text-align: center;
                    }

                    .hero-title {
                        h1 {
                            font-size: 82px;
                            color: ${colors.dark};
                            font-weight: 700;
                            line-height: 90px;
                            margin-bottom: 40px;

                            @media only screen and (max-width: 991px) {
                                font-size: 62px;
                                line-height: 70px;
                            }

                            @media only screen and (max-width: 767px) {
                                font-size: 42px;
                                line-height: 50px;
                            }

                            @media only screen and (max-width: 576px) {
                                font-size: 30px;
                                line-height: 40px;
                                margin-bottom: 20px;
                            }
                        }
                    }
                    .hero-desc {
                        p {
                            font-size    : 19px;
                            color        : ${colors.black2};
                            margin-bottom: 35px;
                            max-width: 550px;
                            font-weight  : 500;
                            line-height: 30px;

                            @media only screen and (max-width: 576px) {
                                font-size: 16px;
                                margin-bottom: 20px;
                            }
                        }
                    }
                    .hero-btns {
                        a.link-btn {
                            font-size: 17px;
                            color: #ffffff;
                            background: ${colors.gr_bg};
                            height: 50px;
                            padding: 12px 28px;
                            border-radius: 30px;
                            display: inline-block;
                            font-weight: 500;
                            margin-right: 20px;
                            i {
                                font-size: 22px;
                                margin-left: 5px;
                                transform: translateY(10%);
                            }
                            &:hover {
                                background: ${colors.gr_bg2};
                            }
                        }

                        button.play-btn {
                            position  : relative;
                            z-index   : 10;
                            transform : translateX(0) translateY(18%);
                            box-sizing: content-box;
                            display   : inline-block;
                            width     : 32px;
                            height    : 32px;
                            border-radius : 50%;

                            i {
                                position   : relative;
                                font-size  : 30px;
                                color      : #ffffff;
                                z-index    : 11;
                                padding-top: 2px;
                                margin-left: 2px;
                            }

                            span {
                                font-size: 14px;
                                color: ${colors.black2};
                                font-weight: 500;
                                position: absolute;
                                top: 7px;
                                right: -92px;
                            }

                            &:after {
                                content   : "";
                                position  : absolute;
                                z-index   : 1;
                                left      : 50%;
                                top       : 50%;
                                transform : translateX(-50%) translateY(-50%);
                                display   : block;
                                width     : 50px;
                                height    : 50px;
                                background: ${colors.dark};
                                border-radius : 50%;
                                transition : all 200ms;
                            }

                            &:hover {
                                i, span {
                                    color: ${colors.blue};
                                }
                            }

                            @media only screen and (max-width: 576px) {
                                display: none;
                            }
                        }
                    }
                }

                .hero-image {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    img {
                        position: absolute;
                        bottom: -39%;
                        right: 0;
                        max-width: 460px;
                    }

                    @media only screen and (max-width: 1199px) {
                        display: none;
                    }
                }
            }
        }

        .hero-shape {
            position: absolute;
            width: 60%;
            height: 100px;
            bottom: 0;
            right: 0;
            &:before {
                position: absolute;
                content: "";
                background: ${colors.dark};
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
            }
            &:after {
                position: absolute;
                content: "";
                background: ${colors.dark};
                width: 50px;
                height: 100%;
                top: 0;
                left: -25px;
                transform: skew(-25deg);
                z-index: 1;
            }

            @media only screen and (max-width: 767px) {
                display: none;
            }
        }
    }
`;