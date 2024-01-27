import styled from "styled-components";
import { colors } from "../elements";

export const Styles = styled.div`
   .sticky-header-area {
        background: #fffafa;
        height: 80px;
        position: relative;
        display: none;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        z-index: 11;
        animation: 300ms ease-in-out 0s 1 normal none running fadeInDown;
        box-shadow: rgb(225 225 225 / 20%) 0px 0px 30px -10px;
        &:before {
            position: absolute;
            content: "";
            background: ${colors.dark};
            width: 26%;
            height: 100%;
            top: 0;
            left: -18px;
            transform: skew(-25deg);
            z-index: 1;

            @media only screen and (max-width: 1600px) {
                width: 19%;
            }

            @media only screen and (max-width: 1399px) {
                width: 20%;
            }

            @media only screen and (max-width: 991px) {
                width: 26%;
            }
        }
        
        .sticky-logo {
            a.navbar-brand {
                font-size: 30px;
                color: #ffffff;
                position: relative;
                z-index: 2;
                img {
                    max-width: 55%;
                    margin-top: 20px;

                    @media only screen and (max-width: 991px) {
                        max-width: 80px;
                    }
                }
            }
        }
        .sticky-navmenu.nav-menu {
            padding-top: 18px;
            .navigation {
                margin-right: 30px;
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

                        @media only screen and (max-width: 1199px) {
                            margin-right: 10px;
                        }

                        @media only screen and (max-width: 991px) {
                            margin-right: 4px;
                        }
                    }
                }

                @media only screen and (max-width: 991px) {
                    margin-right: 0;
                }
            }

            .getintouch-phone {
                .get-in-touch {
                    margin-right: 30px;
                    a {
                        font-size: 16px;
                        color: #ffffff;
                        background: ${colors.gr_bg};
                        padding: 10px 25px;
                        border-radius: 30px;
                        display: inline-block;
                        font-weight: 500;
                        &:hover {
                            background: ${colors.gr_bg2};
                        }

                        @media only screen and (max-width: 1199px) {
                            font-size: 14px;
                        }
                    }

                    @media only screen and (max-width: 1399px) {
                        margin-right: 0;
                    }
                }
                .menu-phone {
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

                    @media only screen and (max-width: 1399px) {
                        display: none !important;
                    }
                }

                @media only screen and (max-width: 991px) {
                    display: none !important;
                }
            }
        }
    }

    .sticky-header-area.sticky {
        display: block;
        z-index: 111111;

        @media (max-width: 767px) {
            display: none;
        }
    }
`;