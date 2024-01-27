import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .header-two-area {
        .header-table {
            position: relative;
            .header-tablecell {
                position: absolute;
                top: 40px;
                left: 0;
                width: 100%;
                height: 85px;
                background: #fffafa;
                padding: 0 35px;
                z-index: 999;
                border-radius: 15px;
                &:before {
                    position: absolute;
                    content: "";
                    background: ${colors.dark};
                    width: 14.5%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    border-radius: 15px 0 0 15px;
                    z-index: 1;

                    @media (max-width: 1399px) {
                        width: 14.3%;
                    }

                    @media (max-width: 1199px) {
                        width: 17.5%;
                    }
                }

                &:after {
                    position: absolute;
                    content: "";
                    background: ${colors.dark};
                    width: 40px;
                    height: 100%;
                    top: 0;
                    left: 13%;
                    transform: skew(-25deg);
                    z-index: 1;

                    @media (max-width: 1399px) {
                        left: 12.5%;
                    }

                    @media (max-width: 1199px) {
                        left: 15.4%;
                    }

                    @media (max-width: 991px) {
                        left: 14.6%;
                    }
                }
                .logo {
                    position: relative;
                    z-index: 1;
                    a {
                        img {
                            padding-top: 20px;

                            @media (max-width: 1399px) {
                                max-width: 100px;
                            }

                            @media (max-width: 991px) {
                                max-width: 80px;
                            }
                        }
                    }
                }

                .navigation {
                    margin-top: 20px;
                    margin-left: 20px;
                    ul.nav {
                        li.nav-item {
                            margin-right: 20px;
                            position: relative;
                            a.nav-link {
                                font-size: 15px;
                                color: ${colors.dark};
                                font-weight: 600;
                                text-transform: uppercase;
                                padding: 12px 5px;
                                i {
                                    font-size: 12px;
                                    transform: translateY(-5%);
                                }
                                &:hover {
                                    color: ${colors.blue};
                                }

                                @media (max-width: 991px) {
                                    font-size: 13px;
                                    padding: 10px 5px;
                                }
                            }
                            
                            ul.dropdown {
                                position  : absolute;
                                left      : -5px;
                                top       : 100%;
                                min-width : 190px;
                                background: #fff;
                                text-align: left;
                                padding   : 0;
                                border: 1px solid ${colors.border3};
                                border-radius : 0 0 15px 15px;
                                transition : 0.2s ease;
                                opacity         : 0;
                                transform       : scaleY(0);
                                visibility      : hidden;
                                z-index         : 999;
                                transform-origin: center top 0;
                                overflow : hidden;

                                li.nav-item {
                                    margin-right: 0;
                                    position: relative;

                                    a.nav-link {
                                        font-size     : 13px;
                                        padding       : 10px 20px;
                                        text-transform: capitalize;
                                        margin-right  : 0;
                                        font-weight   : 500;
                                        border-bottom : 1px solid ${colors.border3};

                                        &:hover {
                                            background: ${colors.gr_bg};
                                            color: #ffffff;

                                            i {
                                                color: #fff;
                                            }
                                        }

                                        i {
                                            float     : right;
                                            margin-top: 4px;
                                        }
                                    }

                                    &:last-child {
                                        margin-left: 0;

                                        a.nav-link {
                                            border-bottom: none;
                                        }
                                    }
                                }
                            }

                            &:hover {
                                ul.dropdown {
                                    opacity   : 1;
                                    transform : scaleY(1);
                                    visibility: visible;
                                }
                            }

                            @media (max-width: 1399px) {
                                margin-right: 3px;
                            }

                            @media (max-width: 991px) {
                                margin-right: 0;
                            }
                        }
                    }
                }

                .phone-search-box {
                    margin-top: 20px;
                    .menu-phone {
                        padding-right: 15px;
                        margin-right: 15px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.border3};
                            width: 1px;
                            height: 25px;
                            top: 8px;
                            right: 0px;
                        }
                        .loc-icon {
                            i {
                                font-size: 28px;
                                color: ${colors.text2};
                                margin-right: 12px;
                                display: inline-block;
                                margin-top: 6px;
                            }
                        }
                        .loc-text {
                            p {
                                font-size: 14px;
                                color: ${colors.text2};
                                margin-bottom: -2px;
                                font-weight: 500;
                            }
                            span {
                                font-size: 17px;
                                color: ${colors.dark};
                                font-weight: 600;
                            }
                        }

                        @media (max-width: 1399px) {
                            padding-right: 3px;
                            margin-right: 2px;
                        }

                        @media (max-width: 1199px) {
                            display: none !important;
                        }
                    }

                    .search-box {
                        @media (max-width: 991px) {
                            display: none;
                        }
                    }
                    .side-box {
                        @media (max-width: 991px) {
                            display: none;
                        }
                    }
                }

                @media (max-width: 991px) {
                    height: 75px;
                }
            }
        }

        @media (max-width: 767px) {
            display: none;
        }
    }
`;