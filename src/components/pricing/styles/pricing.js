import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .pricing-area {
        padding: 80px 0 190px;
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

        .pricing-box {
            border: 2px solid;
            padding: 35px 0;
            border-radius: 15px;
            .pricing-top {
                padding-bottom: 20px;
                position: relative;
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.border1};
                    width: 50%;
                    height: 1px;
                    bottom: 0;
                    left: 25%;
                }
                h4 {
                    color: ${colors.dark};
                    font-weight: 600;
                    margin-bottom: 20px;

                    @media only screen and (max-width: 1199px) {
                        font-size: 22px;
                    }
                }
                .price-amount {
                    position: relative;
                    span {
                        display: block;
                        font-size: 48px;
                        font-weight: 600;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 80%;
                        height: 72px;
                        padding-left: 40px;
                        &:before {
                            position: absolute;
                            content: "";
                            background: #ffffff;
                            width: 35px;
                            height: 100%;
                            top: 0;
                            right: -18px;
                            transform: skew(-25deg);
                            z-index: 1;
                        }

                        @media only screen and (max-width: 1199px) {
                            padding-left: 20px;
                        }
                    }
                }
                p {
                    padding-top: 90px;
                    font-size: 16px;
                    color: ${colors.text2};
                    max-width: 70%;
                    margin: auto;

                    @media only screen and (max-width: 1199px) {
                        max-width: 80%;
                    }
                }
            }

            .pricing-list {
                padding: 20px 40px 10px;
                ul {
                    li {
                        font-size: 15px;
                        color: ${colors.black1};
                        margin-bottom: 12px;
                        i {
                            font-size: 20px;
                            transform: translateY(10%);
                            margin-right: 2px;
                        }

                        @media only screen and (max-width: 1199px) {
                            font-size: 14px;
                            letter-spacing: 0.1px;
                        }
                    }
                }

                .buy-button {
                    margin-top: 30px;
                    button.buybtn {
                        font-size: 16px;
                        padding: 13px 35px;
                        border: none;
                        border-radius: 30px;
                        display: inline-block;
                        font-weight: 500;
                    }

                    @media only screen and (max-width: 1199px) {
                        margin-top: 15px;
                    }
                }

                @media only screen and (max-width: 1399px) {
                    padding: 20px 18px 10px;
                }

                @media only screen and (max-width: 1199px) {
                    padding: 20px 10px 10px;
                }
            }

            @media only screen and (max-width: 1199px) {
                padding: 15px 0;
            }

            @media only screen and (max-width: 1199px) {
                margin-bottom: 20px;
            }
        }

        .pricing-box.box1 {
            border-color: #f3f3c9;
            .pricing-top {
                .price-amount {
                    span {
                        background-color: #f3f3c9;
                        color: #c0c195;
                    }
                }
            }
            .pricing-list {
                ul {
                    li {
                        i {
                            color: #c0c195;
                        }
                    }
                }
                .buy-button {
                    button.buybtn {
                        background: #f3f3c9;
                        color: #c0c195;
                        &:hover {
                            background: #c0c195;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
        .pricing-box.box2 {
            border-color: #d1efe5;
            .pricing-top {
                .price-amount {
                    span {
                        background-color: #d1efe5;
                        color: #88ada1;
                    }
                }
            }
            .pricing-list {
                ul {
                    li {
                        i {
                            color: #88ada1;
                        }
                    }
                }
                .buy-button {
                    button.buybtn {
                        background: #d1efe5;
                        color: #88ada1;
                        &:hover {
                            background: #88ada1;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
        .pricing-box.box3 {
            border-color: #baefff;
            .pricing-top {
                .price-amount {
                    span {
                        background-color: #baefff;
                        color: #00b1e6;
                    }
                }
            }
            .pricing-list {
                ul {
                    li {
                        i {
                            color: #00b1e6;
                        }
                    }
                }
                .buy-button {
                    button.buybtn {
                        background: #baefff;
                        color: #00b1e6;
                        &:hover {
                            background: #00b1e6;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
        .pricing-box.box4 {
            border-color: #fdd7dd;
            .pricing-top {
                .price-amount {
                    span {
                        background-color: #fdd7dd;
                        color: #dc8a97;
                    }
                }
            }
            .pricing-list {
                ul {
                    li {
                        i {
                            color: #dc8a97;
                        }
                    }
                }
                .buy-button {
                    button.buybtn {
                        background: #fdd7dd;
                        color: #dc8a97;
                        &:hover {
                            background: #dc8a97;
                            color: #ffffff;
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 991px) {
            padding: 80px 0 170px;
        }

        @media only screen and (max-width: 767px) {
            padding: 40px 0 130px;
        }
    }
`;