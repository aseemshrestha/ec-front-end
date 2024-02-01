import styled from "styled-components";
import { colors } from '../../../inc/elements';

export const Styles = styled.div`
    .project-details-page {
        .project-details-area {
            padding: 80px 0;
            .project-info {
                ul {
                    li.info-item {
                        background: ${colors.bg2};
                        position: relative;
                        padding: 15px;
                        padding-left: 80px;
                        border-radius: 8px;
                        height: 70px;
                        overflow: hidden;
                        margin-bottom: 15px;
                        i.info-icon {
                            font-size: 24px;
                            position: absolute;
                            width: 60px;
                            height: 100%;
                            top: 0;
                            left: 0;
                            background: ${colors.blue};
                            color: #ffffff;
                            text-align: center;
                            padding-top: 20px;

                            @media (max-width: 1399px) {
                                width: 55px;
                                padding-top: 13px;
                            }
                        }

                        i.la-calendar {
                            font-size: 30px;
                        }

                        p {
                            font-size: 13px;
                            color: ${colors.text3};
                            font-weight: 500;
                            margin-bottom: -3px;
                            letter-spacing: 0.6px;

                            @media (max-width: 991px) {
                                font-size: 12px;
                            }
                        }

                        h5 {
                            color: ${colors.black1};

                            @media (max-width: 991px) {
                                font-size: 16px;
                            }
                        }

                        ul.social {
                            margin-top: 8px;
                            li {
                                a {
                                    font-size: 16px;
                                    color: ${colors.text1};
                                    display: inline-block;
                                    width: 20px;
                                    &:hover {
                                        color: ${colors.blue};
                                    }
                                }
                            }
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }

                        @media (max-width: 1399px) {
                            height: 60px;
                            padding: 8px;
                            padding-left: 60px;
                        }
                    }
                }
            }
            .project-image {
                img {
                    border-radius: 10px;

                    @media (max-width: 767px) {
                        display: none;
                    }
                }
            }

            .project-desc {
                margin-top: 50px;
                h3 {
                    color: ${colors.black1};
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 20px;

                    @media (max-width: 767px) {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                }
                p {
                    font-size: 15px;
                    color: ${colors.text2};
                    letter-spacing: 0.5px;
                    line-height: 27px;
                    margin-bottom: 30px;
                }

                @media (max-width: 767px) {
                    margin-top: 35px;
                }
            }

            .project-challenge {
                h5 {
                    display: inline-block;
                    background: ${colors.dark};
                    color: #ffffff;
                    padding: 8px 35px 8px 20px;
                    border-radius: 5px 0 0 5px;
                    margin-bottom: 20px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: #ffffff;
                        width: 23px;
                        height: 100%;
                        top: 0;
                        right: -11px;
                        transform: skew(-25deg);
                        z-index: 1;
                    }
                }
                p.ch-desc {
                    font-size: 15px;
                    color: ${colors.text2};
                    letter-spacing: 0.5px;
                    line-height: 27px;
                    margin-bottom: 30px;
                }

                ul {
                    li {
                        line-height: 60px;
                        .box-icon {
                            i {
                                font-size: 26px;
                                color: ${colors.blue};
                                margin-right: 10px;
                                margin-top: 5px;
                            }
                        }
                        .icon-text {
                            p {
                                font-size: 15px;
                                color: ${colors.text3};
                                line-height: 25px;
                            }
                        }
                    }
                }
            }

            .project-solution {
                h5 {
                    display: inline-block;
                    background: ${colors.dark};
                    color: #ffffff;
                    padding: 8px 35px 8px 20px;
                    border-radius: 5px 0 0 5px;
                    margin-bottom: 20px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: #ffffff;
                        width: 23px;
                        height: 100%;
                        top: 0;
                        right: -11px;
                        transform: skew(-25deg);
                        z-index: 1;
                    }
                }
                p.sol-desc {
                    font-size: 15px;
                    color: ${colors.text2};
                    letter-spacing: 0.5px;
                    line-height: 27px;
                    margin-bottom: 30px;
                }

                ul {
                    li {
                        background: ${colors.bg2};
                        padding: 12px 25px;
                        span {
                            font-size: 36px;
                            font-weight: 600;
                            margin-right: 10px;
                        }
                        p {
                            display: inline-block;
                            font-size: 15px;
                            color: ${colors.text3};
                            font-weight: 500;
                        }
                        &:nth-child(1) {
                            span {
                                color: #dc8a97;
                            }
                        }
                        &:nth-child(2) {
                            span {
                                color: #88ada1;
                            }
                        }
                        &:nth-child(3) {
                            span {
                                color: #00b1e6;
                            }
                        }

                        @media (max-width: 991px) {
                            padding: 5px 15px 15px;
                        }
                    }
                }
            }

            .project-comment {
                margin-top: 40px;
                margin-bottom: 40px;
                h5 {
                    display: inline-block;
                    background: ${colors.dark};
                    color: #ffffff;
                    padding: 8px 35px 8px 20px;
                    border-radius: 5px 0 0 5px;
                    margin-bottom: 20px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: #ffffff;
                        width: 23px;
                        height: 100%;
                        top: 0;
                        right: -11px;
                        transform: skew(-25deg);
                        z-index: 1;
                    }
                }
                p.com-desc {
                    font-size: 15px;
                    color: ${colors.text2};
                    letter-spacing: 0.5px;
                    line-height: 27px;
                    margin-bottom: 30px;
                }
                .comment-box {
                    background: ${colors.bg2};
                    padding: 28px 35px;
                    border-radius: 10px;
                    p {
                        font-size: 17px;
                        color: ${colors.text2};
                        letter-spacing: 0.5px;
                        line-height: 28px;
                        margin-bottom: 10px;
                    }
                    span {
                        font-size: 22px;
                        color: ${colors.black1};
                        font-weight: 700;
                        letter-spacing: -1.5px;
                        i {
                            font-size: 24px;
                            color: ${colors.blue};
                            display: inline-block;
                            margin-right: 5px;
                            transform: translateY(15%) rotateY(180deg);
                        }
                    }
                }
            }

            .rel-project {
                border-top: 1px solid ${colors.border1};
                h5 {
                    display: inline-block;
                    background: ${colors.dark};
                    color: #ffffff;
                    padding: 8px 35px 8px 20px;
                    border-radius: 5px 0 0 5px;
                    margin-bottom: 30px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: #ffffff;
                        width: 23px;
                        height: 100%;
                        top: 0;
                        right: -11px;
                        transform: skew(-25deg);
                        z-index: 1;
                    }
                }

                .project-item {
                    display: block;
                    width: 100%;
                    transition: 1s ease all;
                    box-sizing: border-box;
                    border-radius: 15px;
                    overflow: hidden;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.dark};
                        width: 75%;
                        height: 75px;
                        bottom: 0;
                        left: -82%;
                        transform: skew(-25deg);
                        z-index: 1;
                        visibility: hidden;
                        transition: all 0.4s ease;
                    }
                    img{
                        max-width:100%; 
                        height: auto;
                        transition: all 0.3s ease 0s;
                    }

                    .project-content {
                        position: absolute;
                        bottom : 0;
                        left : 0;
                        width: 75%;
                        height: auto;
                        padding: 15px 20px;
                        z-index: 111;
                        background: transparent;
                        transition: all 0.3s ease 0s;
                        p.pro-group {
                            color: #ffffff;
                            font-weight: 500;
                        }
                        h6.pro-title {
                            a {
                                color : #ffffff;
                                text-transform: uppercase;
                                &:hover {
                                    color : ${colors.blue};
                                }
                            }
                        }
                        span.pro-category {
                            font-size: 14px;
                            color: ${colors.border1};
                        }
                    }

                    &:hover {
                        &:before {
                            visibility: visible;
                            left: -25px;
                        }
                        img {
                            transform: scale(1.1);
                        }
                    }

                    @media (max-width: 767px) {
                        margin-bottom: 20px;
                    }
                }
            }

            @media (max-width: 767px) {
                padding: 50px 0 30px;
            }
        }
    }
`;