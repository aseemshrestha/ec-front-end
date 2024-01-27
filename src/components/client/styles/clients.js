import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .clients-area {
        .clients-container {
            position: relative;
            .clients-row {
                position: absolute;
                top: -110px;
                left: 0;
                width: 100%;
                height: auto;
                z-index: 111;
                background: ${colors.dark};
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 20px;
                padding: 80px 60px 85px;
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
                            background: #ffffff;
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
                                background: #ffffff;
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
                        color: #ffffff;
                        font-weight: 600;
                        max-width: 550px;
                        margin: auto;
                        margin-bottom: 35px;
                    }
                }

                .client-slider {
                    .client-item {
                        img {
                            display: inline-block;
                            max-width: 150px;

                            @media (max-width: 991px) {
                                max-width: 120px;
                            }
                        }
                    }
                }

                @media (max-width: 767px) {
                    padding: 40px 35px 45px;
                }
            }
        }
    }
`;