import styled from "styled-components";
import { colors } from "../elements";

export const Styles = styled.div`
    button.nav-sidebar {
        padding: 12px 0 0 10px;
        background: transparent;
        border: none;

        i {
            font-size: 18px;
            color    : ${colors.text1};
        }
    }
    
    .sidebar {
        background: ${colors.dark};
        padding         : 40px;
        height          : 100%;
        width           : 400px;
        position        : fixed;
        top             : 0;
        right           : -470px;
        overflow-y      : auto;
        z-index         : 9999;
        transition : all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

        .side-logo {
            margin-bottom: 40px;

            button.close-btn {
                font-size: 18px;
                color    : ${colors.blue};
                background: transparent;
                border   : 1px solid ${colors.text2};
                display: block;
                width: 33px;
                height: 33px;
                text-align: center;
                padding: 3px;
                border-radius : 50%;
                
                &:hover {
                    background  : ${colors.blue};
                    color       : #ffffff;
                    border-color: ${colors.blue};
                }
                i {
                    
                }
            }
        }

        .side-content {
            h6 {
                color         : ${colors.border3};
                text-transform: uppercase;
                font-weight   : 500;
                margin-bottom : 18px;
                position      : relative;

                &::before {
                    position  : absolute;
                    content   : "";
                    background: ${colors.blue};
                    width: 60px;
                    height: 1px;
                    bottom: -5px;
                    left: 0;
                }

                &::after {
                    position  : absolute;
                    content   : "";
                    background: ${colors.blue};
                    width: 60px;
                    height: 1px;
                    bottom: -7px;
                    left: 0;
                }
            }

            p {
                font-size    : 15px;
                color        : ${colors.text5};
                line-height  : 25px;
                margin-bottom: 30px;
            }
        }

        .side-post {
            margin-bottom: 40px;

            h6 {
                color         : ${colors.border3};
                text-transform: uppercase;
                font-weight   : 500;
                margin-bottom : 25px;
                position      : relative;

                &::before {
                    position  : absolute;
                    content   : "";
                    background: ${colors.blue};
                    width: 60px;
                    height: 1px;
                    bottom: -5px;
                    left: 0;
                }

                &::after {
                    position  : absolute;
                    content   : "";
                    background: ${colors.blue};
                    width: 60px;
                    height: 1px;
                    bottom: -7px;
                    left: 0;
                }
            }

            .post-box {
                margin-bottom: 15px;

                .post-img {
                    img {
                        max-width: 90px;
                        border-radius : 5px;
                        margin-right: 15px;
                    }
                }

                .post-title {
                    p {
                        font-size    : 13px;
                        color        : ${colors.text5};
                        font-weight  : 500;
                        margin-bottom: 6px;
                    }

                    span {
                        font-size: 12px;
                        color    : ${colors.text3};
                    }
                }
            }
        }

        .side-gallery {
            margin-bottom: 32px;

            h6 {
                color         : ${colors.border3};
                text-transform: uppercase;
                font-weight   : 500;
                margin-bottom : 25px;
                position      : relative;

                &::before {
                    position  : absolute;
                    content   : "";
                    background: ${colors.blue};
                    width: 60px;
                    height: 1px;
                    bottom: -5px;
                    left: 0;
                }

                &::after {
                    position  : absolute;
                    content   : "";
                    background: ${colors.blue};
                    width: 60px;
                    height: 1px;
                    bottom: -7px;
                    left: 0;
                }
            }

            img {
                max-width: 96px;
                border-radius : 5px;
                margin-right : 5px;
                margin-bottom: 6px;
            }
        }

        .side-contact {
            margin-bottom: 20px;

            h6 {
                color         : ${colors.border3};
                text-transform: uppercase;
                font-weight   : 500;
                margin-bottom : 20px;
                position      : relative;

                &::before {
                    position  : absolute;
                    content   : "";
                    background: ${colors.blue};
                    width: 60px;
                    height: 1px;
                    bottom: -5px;
                    left: 0;
                }

                &::after {
                    position  : absolute;
                    content   : "";
                    background: ${colors.blue};
                    width: 60px;
                    height: 1px;
                    bottom: -7px;
                    left: 0;
                }
            }

            ul {
                li {
                    font-size    : 14px;
                    color        : ${colors.text5};
                    margin-bottom: 12px;

                    i {
                        font-size     : 18px;
                        color         : ${colors.blue};
                        margin-top    : 1px;
                        margin-right  : 6px;
                        vertical-align: text-bottom;
                        float         : left;
                        height        : 30px;
                    }
                }
            }
        }

        .side-social {
            ul {
                li {
                    a {
                        font-size  : 13px;
                        color      : ${colors.blue};
                        display    : inline-block;
                        background  : rgba(255,255,255,0.08);
                        width      : 30px;
                        height     : 30px;
                        text-align : center;
                        padding-top: 6px;
                        border-radius : 7px;

                        &:hover {
                            background  : ${colors.blue};
                            border-color: ${colors.blue};
                            color       : #fff;
                        }
                    }
                }
            }
        }
    }

    .sidebar.open {
        right: 0 !important;
    }

    .sidebar-overlay {
        position        : fixed;
        left            : 0;
        top             : 0;
        height          : 100%;
        width           : 100%;
        display         : block;
        background-color: rgba(0, 0, 0, 0.8);
        z-index         : 1111;
        visibility      : hidden;
        opacity         : 0;
        transition      : 0.3s ease;
    }

    .sidebar-overlay.visible {
        visibility: visible;
        opacity   : 1;
    }
`;