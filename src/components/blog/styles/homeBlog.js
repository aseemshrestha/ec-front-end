import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .homeblog-area {
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
                margin-bottom: 40px;
            }
        }

        .blog-item {
            .blog-image {
                position: relative;
                border-radius: 15px;
                overflow: hidden;
                img {

                }
                .date-box {
                    position: absolute;
                    top: 0;
                    left: 0;
                    span {
                        font-size: 15px;
                        color: #ffffff;
                        background: ${colors.blue};
                        display: inline-block;
                        width: 75px;
                        height: 65px;
                        text-align: center;
                        font-weight: 500;
                        padding-top: 12px;
                        padding-left: 8px;
                        position: relative;
                        strong {
                            font-size: 30px;
                            display: block;
                            line-height: 0.8;
                        }
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.blue};
                            width: 24px;
                            height: 100%;
                            top: 0;
                            right: -12px;
                            transform: skew(-20deg);
                            z-index: 1;
                        }
                    }
                }
            }

            .blog-text {
                position: relative;
                padding: 20px 30px 0;
                h4 {
                    margin-bottom: 20px;
                    a {
                        color: ${colors.dark};
                        line-height: 32px;
                        &:hover {
                            color: ${colors.blue};
                        }

                        @media only screen and (max-width: 1199px) {
                            font-size: 20px;
                        }

                        @media only screen and (max-width: 991px) {
                            font-size: 17px;
                            line-height: 20px;
                            letter-spacing: 0.1px;
                        }
                    }
                }
                .blog-author {
                    img {
                        max-width: 50px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                    a {
                        font-size: 16px;
                        color: ${colors.blue};
                        font-weight: 500;
                        text-transform: uppercase;
                        padding-top: 12px;
                        &:hover {
                            color: ${colors.dark};
                        }
                    }
                }
                a.btn-readmore {
                    background: transparent;
                    color: ${colors.text3};
                    text-align: center;
                    font-size: 16px;
                    padding: 0;
                    font-weight: 500;
                    position: absolute;
                    bottom: 15px;
                    right: 30px;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.text5};
                        width: 78%;
                        height: 1px;
                        bottom: 2px;
                        left: 1px;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.text5};
                        width: 78%;
                        height: 1px;
                        bottom: 0;
                        left: 1px;
                    }
                    i {
                        font-size: 18px;
                        color: ${colors.text4};
                        margin-left: 3px;
                        transform: translateY(25%);
                    }
                    &:hover {
                        color: ${colors.blue};
                        border-color: ${colors.blue};
                        &:before, &:after {
                            background: ${colors.blue};
                        }
                        i {
                            color: ${colors.blue};
                        }
                    }

                    @media only screen and (max-width: 1199px) {
                        right: 0;
                    }

                    @media only screen and (max-width: 991px) {
                        display: none;
                    }
                }

                @media only screen and (max-width: 1399px) {
                    padding: 10px 5px 0;
                }
            }

            @media only screen and (max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        @media only screen and (max-width: 767px) {
            padding: 40px 0 10px;
        }
    }
`;