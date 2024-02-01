import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .registration-page {
        .registration-area {
            background: ${colors.bg2};
            padding: 80px 0;
            .registration-box {
                background: #ffffff;
                padding: 40px 50px 50px;
                box-shadow: rgb(0 0 0 / 2%) 0px 0px 12px 1px;
                border-radius: 20px;
                .sec-title {
                    h4 {
                        color: ${colors.blue};
                        text-transform: uppercase;
                        font-weight: 600;
                        display: inline-block;
                        margin-bottom: 30px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.dark};
                            width: 30px;
                            height: 2px;
                            left: 105%;
                            bottom: 15px;
                        }
                        &:after {
                            position: absolute;
                            content: "";
                            background: ${colors.blue};
                            width: 38px;
                            height: 2px;
                            left: 105%;
                            bottom: 11px;
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
                                bottom: 15px;
                            }
                            &:after {
                                position: absolute;
                                content: "";
                                background: ${colors.blue};
                                width: 38px;
                                height: 2px;
                                right: 105%;
                                bottom: 11px;
                            }
                        }
                    }
                }

                form.registration_form {
                    p.form-box {
                        padding-bottom: 20px;
                        margin-bottom: 12px;
                        position: relative;
                        input.form-control {
                            font-size: 15px;
                            color: ${colors.dark};
                            border: none;
                            border-bottom: 2px solid ${colors.border3};
                            border-radius: 0;
                            padding: 8px 0;
                            &::placeholder {
                                font-size: 15px;
                                color: ${colors.dark};
                                font-weight: 500;
                            }
                            &:focus {
                                box-shadow: none;
                                border-color: ${colors.blue};
                            }
                        }
                        label.error {
                            font-size: 14px;
                            color: ${colors.red};
                            padding-top: 3px;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                        }
                    }

                    p.term-cond {
                        position: relative;
                        padding-bottom: 20px;
                        label.choice {
                            font-size: 15px;
                            color: ${colors.dark};
                            font-weight: 500;
                            cursor: pointer;

                            input[type=checkbox] {
                                border : 1px solid ${colors.text3};
                                appearance: none;
                                width: 14px;
                                height: 14px;
                                cursor: pointer;
                                margin-right: 4px;
                                position: relative;
                                top: 2px;

                                &:focus {
                                    outline: none;
                                }

                                &:checked {
                                    background-color: ${colors.blue};
                                    background: ${colors.blue} url("data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==") 1px 1px no-repeat;
                                    border-color : ${colors.blue};
                                }
                            }
                        }
                        label.error {
                            font-size: 14px;
                            color: ${colors.red};
                            padding-top: 3px;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                        }
                    }

                    button.submit-btn {
                        font-size: 20px;
                        color: #ffffff;
                        background: linear-gradient(90deg,${colors.blue2} 0%,${colors.blue} 100%);
                        border: none;
                        width: 100%;
                        height: 48px;
                        border-radius: 30px;
                        display: inline-block;
                        font-weight: 500;
                        margin: 30px 0;
                        &:hover {
                            background: linear-gradient(90deg,${colors.blue} 0%,${colors.blue2} 100%);
                        }
                        &:focus {
                            box-shadow: none;
                        }
                    }

                    .signin-btn {
                        p {
                            font-size: 15px;
                            color: ${colors.dark};
                            font-weight: 500;
                            a {
                                font-size : 15px;
                                color : ${colors.blue};
                                &:hover {
                                    text-decoration : underline;
                                }
                            }
                        }
                    }
                }

                @media (max-width: 575px) {
                    padding: 25px 30px 35px;
                }
            }
        }
    }
`;