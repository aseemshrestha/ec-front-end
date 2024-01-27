import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .block-area {
        padding: 80px 0;
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
                margin-bottom: 50px;
            }
            p {
                font-size: 15px;
                color: ${colors.text2};
                letter-spacing: 0.5px;
                line-height: 27px;
                margin-bottom: 30px;
            }
        }

        .block-box {
            padding: 130px 40px 40px;
            border: 2px solid;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            .block-icon {
                width: 140px;
                height: 70px;
                display: inline-block;
                position: absolute;
                top: 40px;
                left: 0;
                padding-top: 6px;
                padding-left: 40px;
                &:after {
                    position: absolute;
                    content: "";
                    background: #ffffff;
                    width: 32px;
                    height: 100%;
                    top: 0;
                    right: -15px;
                    transform: skew(-23deg);
                    z-index: 1;
                }
                i {
                    font-size: 40px;
                }

                @media only screen and (max-width: 1399px) {
                    top: 25px;
                }

                @media only screen and (max-width: 1199px) {
                    width: 120px;
                    padding-left: 25px;
                }
            }
            .block-title {
                h5 {
                    color: ${colors.dark};
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 15px;

                    @media only screen and (max-width: 1199px) {
                        font-size: 16px;
                    }
                }
            }
            .block-desc {
                p {
                    font-size: 16px;
                    color: ${colors.text1};
                    font-weight: 400;
                }
            }
            .block-link {
                position: absolute;
                bottom: 0;
                right: 0;
                background: ${colors.dark};
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.dark};
                    width: 20px;
                    height: 42px;
                    bottom: 0;
                    left: -10px;
                    transform: skew(-23deg);
                }
                a {
                    font-size: 15px;
                    color: #ffffff;
                    height: 42px;
                    padding: 10px 25px 10px 20px;
                    display: block;
                    &:hover {
                        color: ${colors.blue};
                    }
                }
            }

            @media only screen and (max-width: 1399px) {
                padding: 110px 25px 18px;
            }

            @media only screen and (max-width: 991px) {
                margin-bottom: 20px;
            }
        }

        .block-box.block1 {
            border-color: #f3f3c9;
            .block-icon {
                background: #f3f3c9;
                i {
                    color: #c0c195;
                }
            }
        }

        .block-box.block2 {
            border-color: #d1efe5;
            .block-icon {
                background: #d1efe5;
                i {
                    color: #88ada1;
                }
            }
        }

        .block-box.block3 {
            border-color: #baefff;
            .block-icon {
                background: #baefff;
                i {
                    color: #00b1e6;
                }
            }
        }

        .block-box.block4 {
            border-color: #fdd7dd;
            .block-icon {
                background: #fdd7dd;
                i {
                    color: #dc8a97;
                }
            }
        }

        @media only screen and (max-width: 767px) {
            padding: 40px 0 20px;
        }
    }
`;