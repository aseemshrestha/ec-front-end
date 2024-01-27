import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    footer.footer {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        padding : 50px 0 45px;
        &:before {
            position: absolute;
            content: "";
            background : ${colors.dark};
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0.98;
        }
        .footer-top {
            border-bottom: 1px solid ${colors.border2};
            position: relative;
            padding-bottom: 43px;
            .logo {
                @media only screen and (max-width: 767px) {
                    margin-bottom: 30px;
                }
            }
            .registration {
                margin-top: 2px;
                form {
                    position: relative;
                    margin-top: -7px;
                    border-radius: 10px;
                    overflow: hidden;
                    input {
                        width: 100%;
                        height: 55px;
                        background-color: rgba(255, 255, 255, 0.08);
                        font-size: 16px;
                        padding: 15px 25px;
                        color: #ffffff;
                        border: none;
                        &::placeholder {
                            color: ${colors.border3};
                        }
                    }
                    button {
                        background: ${colors.gr_bg2};
                        border: none;
                        font-size: 18px;
                        color: #ffffff;
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 140px;
                        height: 55px;
                        &:hover {
                            background: ${colors.gr_bg};
                        }
                    }
                }

                @media only screen and (max-width: 767px) {
                    margin-bottom: 25px;
                }
            }
            .social {
                margin-top: 6px;
                ul {
                    li {
                        a {
                            font-size: 15px;
                            color: ${colors.blue};
                            display: inline-block;
                            background: rgba(255, 255, 255, 0.08);
                            width: 32px;
                            height: 32px;
                            text-align: center;
                            border-radius: 5px;
                            padding-top: 6px;
                            i {

                            }
                            &:hover {
                                background: ${colors.blue};
                                color: #ffffff;
                            }
                        }

                        @media only screen and (max-width: 991px) {
                            a {
                                font-size: 14px;
                                width: 29px;
                                height: 29px;

                            }

                            &:not(:last-child) {
                                margin-right: 3px;
                            }
                        }
                    }
                }

                @media only screen and (max-width: 767px) {
                    text-align: center !important;
                }
            }

            @media only screen and (max-width: 767px) {
                text-align: center;
            }
        }

        .footr-main {
            padding: 65px 0 45px;
            position: relative;
            .ft-about {
                h5 {
                    color: ${colors.border1};
                    text-transform: uppercase;
                    margin-bottom: 35px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -10px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -12px;
                        left: 0;
                    }
                }
                p {
                    font-size: 15px;
                    color: ${colors.text3};
                    line-height: 28px;
                    margin-bottom: 20px;
                }
                ul {
                    li {
                        font-size: 15px;
                        color: ${colors.text3};
                        margin-bottom: 12px;
                        i {
                            font-size: 20px;
                            color: ${colors.blue};
                            width: 30px;
                            transform: translateY(10%);
                        }
                    }
                }

                @media only screen and (max-width: 991px) {
                    margin-bottom: 20px;
                }
            }
            .ft-link {
                padding-left: 25px;
                h5 {
                    color: ${colors.border1};
                    text-transform: uppercase;
                    margin-bottom: 30px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -10px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -12px;
                        left: 0;
                    }
                }
                ul {
                    li {
                        a {
                            font-size: 15px;
                            color: ${colors.text3};
                            line-height: 35px;
                            i {
                                font-size: 12px;
                                color: ${colors.blue};
                                margin-right: 10px;
                                transform: translateY(-7%);
                            }
                            &:hover {
                                color: ${colors.blue};
                                i {
                                    color: ${colors.blue};
                                }
                            }
                        }
                    }
                }

                @media only screen and (max-width: 991px) {
                    margin-bottom: 20px;
                }

                @media only screen and (max-width: 767px) {
                    padding-left: 0;
                }
            }
            .ft-post {
                h5 {
                    color: ${colors.border1};
                    text-transform: uppercase;
                    margin-bottom: 43px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -10px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -12px;
                        left: 0;
                    }
                }
                .post-box {
                    margin-bottom: 25px;
                    .post-img {
                        img {
                            max-width: 80px;
                            margin-right: 15px;
                            border-radius: 10px;

                            @media only screen and (max-width: 1199px) {
                                max-width: 60px;
                            }
                        }
                    }
                    .post-content {
                        span {
                            display: block;
                            color: ${colors.blue};
                            margin-bottom: 5px;
                        }
                        a {
                            font-size: 16px;
                            color: ${colors.text3};
                            &:hover {
                                color: ${colors.blue};
                            }
                        }
                    }
                }
            }
            .ft-gallery {
                h5 {
                    color: ${colors.border1};
                    text-transform: uppercase;
                    margin-bottom: 43px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -10px;
                        left: 0;
                    }
                    &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 60px;
                        height: 1px;
                        bottom: -12px;
                        left: 0;
                    }
                }
                .gallery-box {
                    img {
                        max-width: 80px;
                        margin-right: 20px;
                        margin-bottom: 24px;
                        border-radius: 10px;

                        @media only screen and (max-width: 1399px) {
                            max-width: 75px;
                            margin-right: 12px;
                            margin-bottom: 12px;
                        }

                        @media only screen and (max-width: 1199px) {
                            max-width: 63px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
            @media only screen and (max-width: 767px) {
                padding: 40px 0 40px;
            }
        }

        .copyright-area {
            position: relative;
            background: rgba(255, 255, 255, 0.08);
            padding: 20px 25px;
            border-radius: 18px;
            .copy-text {
                p {
                    color: ${colors.text3};
                    i {
                        color: ${colors.blue};
                    }
                    a {
                        color: ${colors.blue};
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
            ul.copy-menu {
                li {
                    color: ${colors.text3};
                    a {
                        color: ${colors.text3};
                        font-weight: 500;
                        &:hover {
                            color: ${colors.blue};
                        }
                    }
                    &:first-child {
                        a {
                            padding-right: 5px;
                        }
                    }
                }
            }

            @media only screen and (max-width: 767px) {
                text-align: center;
                .text-end {
                    text-align: center !important;
                }
            }
        }
    }
`;