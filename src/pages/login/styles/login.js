import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .login-page {
        .login-area {
            background: ${colors.bg2};
            padding: 80px 0;
            .login-box {
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
                form.login_form {
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

                    .save-forget-password {
                        margin-bottom: 40px;
                        p.keep-loged {
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
                        }
                        p.forget-pass {
                            a {
                                font-size : 15px;
                                color : ${colors.blue};
                                &:hover {
                                    text-decoration : underline;
                                }
                            }
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
                        margin-bottom: 30px;
                        &:hover {
                            background: linear-gradient(90deg,${colors.blue} 0%,${colors.blue2} 100%);
                        }
                        &:focus {
                            box-shadow: none;
                        }
                    }

                    .signup-btn {
                        margin-bottom: 30px;
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

                    .social-login {
                        border-top: 1px solid ${colors.border1};
                        padding-top: 20px;
                        position: relative;
                        span {
                            font-size: 16px;
                            color: ${colors.dark};
                            font-weight: 600;
                            position: absolute;
                            top: -12px;
                            left: 45%;
                            background: #fff;
                            padding: 0 10px;
                        }
                        p {
                            font-size: 15px;
                            color: ${colors.dark};
                            font-weight: 500;
                            margin-bottom: 20px;
                        }
                        ul {
                            li {
                                a {
                                    font-size: 15px;
                                    color: #ffffff;
                                    display: inline-block;
                                    width: 110px;
                                    height: 40px;
                                    border-radius: 5px;
                                    padding-top: 10px;
                                    i {
                                        font-size: 14px;
                                        margin-right : 3px;
                                    }
                                    &:hover {
                                        background: ${colors.blue} !important;
                                    }

                                    @media (max-width: 1199px) {
                                        width: 100px;
                                    }
                                }
                                &:nth-child(1) {
                                    a {
                                        background: #DB4437;
                                    }
                                }
                                &:nth-child(2) {
                                    a {
                                        background: #4267B2;
                                    }
                                }
                                &:nth-child(3) {
                                    a {
                                        background: #1DA1F2;
                                    }
                                }
                            }
                        }
                    }
                }

                @media (max-width: 1199px) {
                    padding: 25px 30px 35px;
                }
            }

            @media (max-width: 767px) {
                padding: 45px 0;
            }
        }
    }
`;