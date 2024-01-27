import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .counter-area {
        .counter-container {
            position: relative;
            .counter-row {
                position: absolute;
                top: -110px;
                left: 0;
                background: ${colors.dark};
                padding: 80px 60px;
                border-radius: 15px;
                width: 100%;
                z-index: 1111;
                .counter-box {
                    i {
                        font-size: 40px;
                        display: inline-block;
                        width: 80px;
                        height: 65px;
                        margin-right: 30px;
                        padding-top: 10px;
                        padding-left: 8px;
                        text-align: center;
                        position: relative;
                        &:after {
                            position: absolute;
                            content: "";
                            width: 24px;
                            height: 100%;
                            top: 0;
                            right: -12px;
                            transform: skew(-20deg);
                            z-index: 1;

                            @media only screen and (max-width: 1199px) {
                                width: 22px;
                            }
                        }

                        @media only screen and (max-width: 1199px) {
                            font-size: 32px;
                            width: 65px;
                            height: 55px;
                            margin-right: 40px;
                        }
                    }

                    i.flaticon-layers {
                        color: #c0c195;
                        background: #f3f3c9;
                        &:after {
                            background: #f3f3c9;
                        }
                    }
                    i.flaticon-satisfied {
                        color: #88ada1;
                        background: #d1efe5;
                        &:after {
                            background: #d1efe5;
                        }
                    }
                    i.flaticon-customers {
                        color: #00b1e6;
                        background: #baefff;
                        &:after {
                            background: #baefff;
                        }
                    }
                    i.flaticon-coffee-cup {
                        color: #dc8a97;
                        background: #fdd7dd;
                        &:after {
                            background: #fdd7dd;
                        }
                    }

                    h2 {
                        color: ${colors.border1};
                        font-weight: 600;
                        margin-top: 3px;
                        small {
                            font-size: 24px;
                            color: ${colors.blue};
                            display: inline-block;
                            font-weight: 500;
                        }

                        @media only screen and (max-width: 1199px) {
                            font-size: 24px;
                            margin-top: -6px;
                        }
                    }
                    p {
                        font-size: 14px;
                        color: ${colors.text5};
                        font-weight: 500;

                        @media only screen and (max-width: 1399px) {
                            font-size: 13px;
                        }
                    }

                    @media only screen and (max-width: 991px) {
                        margin-bottom: 20px;
                        justify-content: normal !important;
                    }
                }

                @media only screen and (max-width: 991px) {
                    padding: 60px 60px 40px;
                }

                @media only screen and (max-width: 575px) {
                    padding: 45px 45px 25px;
                }
            }
        }
    }
`;