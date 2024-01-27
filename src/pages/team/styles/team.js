import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .team-page {
        .team-member-area {
            padding: 80px 0 55px;
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

            .team-members {
                .team-item {
                    padding-bottom: 20px;
                    position: relative;
                    margin-bottom: 30px;
                    img {
                        border-radius: 20px;

                        @media (max-width: 575px) {
                            width: 100%;
                        }
                    }
                    .img-content {
                        position: absolute;
                        background: #ffffff;
                        bottom: 0;
                        left: 40px;
                        width: 65%;
                        padding: 20px 0 20px 30px;
                        border-radius: 10px 0 0 10px;
                        transition: all 0.2s ease 0s;
                        &:before {
                            position: absolute;
                            content: "";
                            background: #ffffff;
                            width: 30px;
                            height: 99%;
                            top: 0;
                            right: -15px;
                            transform: skew(-20deg);
                            z-index: 1;
                            transition: all 0.2s ease 0s;

                            @media (max-width: 1399px) {
                                height: 100%;
                            }

                            @media (max-width: 1199px) {
                                height: 99%;
                            }
                        }
                        h5 {
                            color: ${colors.dark};
                            font-weight: 600;
                        }
                        p {
                            color: ${colors.text3};
                        }

                        @media (max-width: 1399px) {
                            left: 25px;
                            width: 68%;
                            padding: 15px 0 12px 16px;
                        }

                        @media (max-width: 1199px) {
                            padding: 12px 0 12px 8px;
                            width: 75%;
                            left: 15px;
                        }
                    }

                    .social-box {
                        position: absolute;
                        top: 10%;
                        right: 0;
                        width: 45px;
                        height: 107px;
                        overflow: hidden;
                        ul {
                            background: #ffffff;
                            padding: 10px;
                            position: absolute;
                            right: -100%;
                            visibility: hidden;
                            z-index: 1000;
                            border-radius: 10px 0 0 10px;
                            transition: all 0.3s ease 0s;
                            li {
                                a {
                                    padding: 5px;
                                    display: inline-block;
                                    i {
                                        font-size: 15px;
                                        color: ${colors.text3};
                                        &:hover {
                                            color: ${colors.blue} !important;
                                        }
                                    }
                                    i.fa-facebook-f {
                                        color: #4267b2;
                                    }
                                    i.fa-twitter {
                                        color: #1da1f2;
                                    }
                                    i.fa-linkedin-in {
                                        color: #2867b2;
                                    }
                                }
                            }
                        }
                    }

                    &:hover {
                        .img-content {
                            background: ${colors.dark};
                            &:before {
                                background: ${colors.dark};
                            }
                            h5 {
                                color: #ffffff;
                            }
                            p {
                                color: ${colors.border1};
                            }
                        }
                        .social-box {
                            ul {
                                visibility: visible;
                                right: 0;
                            }
                        }
                    }

                    &:focus {
                        outline: none;
                    }
                }
            }

            @media (max-width: 767px) {
                padding: 40px 0 20px;
            }
        }
    }
`;