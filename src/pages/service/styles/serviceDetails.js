import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .service-details-page {
        .service-details-area {
            padding: 80px 0 65px;
            .service-sidebar {
                .service-category {
                    border: 1px solid ${colors.blue};
                    padding: 20px 30px 30px;
                    border-radius: 15px;
                    margin-bottom: 40px;
                    h4 {
                        color: ${colors.dark};
                        font-weight: 600;
                        margin-bottom: 15px;
                    }
                    ul {
                        li {
                            a {
                                display: block;
                                font-size: 15px;
                                color: ${colors.text2};
                                font-weight: 500;
                                background: ${colors.bg2};
                                padding: 12px 20px;
                                border-radius: 10px;
                                margin-bottom: 10px;
                                &:hover {
                                    color: #ffffff;
                                    background: ${colors.blue};
                                }

                                @media (max-width: 1399px) {
                                    padding: 8px 15px;
                                }
                            }

                            &:last-child {
                                a {
                                    margin-bottom: 0;
                                }
                            }
                        }
                        li.active {
                            a {
                                color: #ffffff;
                                background: ${colors.blue};
                            }
                        }
                    }

                    @media (max-width: 1399px) {
                        padding: 10px 15px 15px;
                    }
                }

                .service-brochure {
                    background: url("/assets/images/hero-bg.jpg");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    padding: 20px 30px 30px;
                    border-radius: 15px;
                    margin-bottom: 40px;
                    h4 {
                        color: ${colors.dark};
                        font-weight: 600;
                        margin-bottom: 15px;
                    }
                    ul {
                        li {
                            button {
                                display: block;
                                width: 100%;
                                height: 55px;
                                margin-bottom: 15px;
                                border: none;
                                border-radius: 10px;
                                font-size: 18px;
                                color: #ffffff;
                                font-weight: 500;
                                i {
                                    font-size: 24px;
                                    color: #ffffff;
                                    transform: translateY(10%);
                                    margin-right: 5px;
                                }
                                &:hover {
                                    background: ${colors.dark} !important;
                                }
                            }
                            button.btn-pdf {
                                background: #c0c195;
                            }
                            button.btn-word {
                                background: #88ada1;
                            }
                            button.btn-power {
                                background: #00b1e6;
                            }
                            &:last-child {
                                button {
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }

                    @media (max-width: 1399px) {
                        padding: 10px 15px 15px;
                    }
                }

                .service-contact {
                    border: 1px solid ${colors.blue};
                    padding: 20px 30px 30px;
                    border-radius: 15px;
                    h4 {
                        color: ${colors.dark};
                        font-weight: 600;
                        margin-bottom: 15px;
                    }

                    ul {
                        li {
                            font-size: 15px;
                            color: ${colors.text2};
                            margin-bottom: 12px;
                            i {
                                font-size: 18px;
                                color: ${colors.blue};
                                width: 30px;
                                transform: translateY(10%);
                            }
                            p {
                                color: ${colors.black1};
                                font-weight: 500;
                                margin-left: 30px;
                            }

                            &:Last-child {
                                margin-bottom: 0;
                            }
                        }
                    }

                    @media (max-width: 1399px) {
                        padding: 10px 15px 15px;
                    }
                }

                @media (max-width: 767px) {
                    margin-bottom: 40px;
                }
            }

            .service-details {
                .service-details-image {
                    img {
                        border-radius: 15px;
                        margin-bottom: 25px;
                    }
                }
                .service-details-heading {
                    h3 {
                        color: ${colors.black1};
                        font-weight: 600;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 17px;
                        color: ${colors.text2};
                        line-height: 30px;
                        margin-bottom: 25px;
                    }
                }

                .icon-boxes {
                    margin-bottom: 20px;
                    .icon-box {
                        margin-bottom: 12px;
                        i {
                            font-size: 26px;
                            color: ${colors.blue};
                            margin-right: 10px;
                            margin-top: 6px;
                        }
                        p {
                            font-size: 16px;
                            color: ${colors.text3};
                            line-height: 25px;
                        }
                    }
                }
                .service-details-desc {
                    margin-bottom: 40px;
                    h4 {
                        color: ${colors.black1};
                        font-weight: 600;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 17px;
                        color: ${colors.text2};
                        line-height: 30px;
                        margin-bottom: 30px;
                    }
                    span {
                        font-size: 17px;
                        color: ${colors.text2};
                        display: block;
                        background: ${colors.bg1};
                        padding: 30px 35px;
                        line-height: 28px;
                        border-left: 3px solid ${colors.blue};
                        border-radius: 20px;
                    }
                }
                .service-accordion {
                    h4 {
                        color: ${colors.black1};
                        font-weight: 600;
                        margin-bottom: 20px;
                    }

                    .accordion {
                        .accordion-item {
                            border: none;
                            margin-bottom: 15px;
                            h5.accordion-header {
                                button.accordion-button {
                                    border: none;
                                    box-shadow: none;
                                    background: ${colors.blue};
                                    padding: 16px 22px;
                                    border-radius: 10px;
                                    display: inline-block;
                                    font-size: 17px;
                                    color: #ffffff;
                                    font-weight: 500;
                                    &:after {
                                        display: none;
                                    }

                                    i {
                                        font-size: 16px;
                                        color: #ffffff;
                                        float: right;
                                        margin-top: 2px;
                                    }
                                }

                                button.accordion-button.collapsed {
                                    i {
                                        transform: rotate(-180deg);
                                    }
                                }
                            }
                            .accordion-body {
                                margin-top: 15px;
                                padding: 16px 22px;
                                background: ${colors.bg1};
                                border-radius: 10px;
                                p {
                                    font-size: 16px;
                                    color: ${colors.black2};
                                    line-height: 30px;
                                    letter-spacing: 0.5px;
                                }
                            }
                        }
                    }
                }
            }

            @media (max-width: 767px) {
                padding: 45px 0 30px;
            }
        }
    }
`;