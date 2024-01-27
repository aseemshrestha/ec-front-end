import styled from "styled-components";
import { colors } from "../elements";

export const Styles = styled.div`
    .breadcrumb-area {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 220px;
        padding-top: 75px;
        .breadcrumb-box {
            .breadcrumb-title {
                p.page-desc {
                    font-size: 15px;
                    color: ${colors.black2};
                    font-weight: 500;
                }
                h1.page-title {
                    color: ${colors.dark};
                    font-weight: 700;
                    text-transform: capitalize;
                }
            }
            .breadcrumb-content {
                margin-top: 10px;
                ul.breadcrumb {
                    background: ${colors.blue};
                    margin: 0;
                    padding: 12px 20px 12px 15px;
                    border-radius: 0 5px 5px 0;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 23px;
                        height: 100%;
                        top: 0;
                        left: -11px;
                        transform: skew(-25deg);
                        z-index: 1;
                        transition: all 0.2s ease;
                    }
                    li.breadcrumb-item {
                        font-size: 15px;
                        color: #ffffff;
                        font-weight: 500;
                        a.nav-link {
                            color: #ffffff;
                            padding: 0;
                            &:hover {
                                color: ${colors.dark};
                            }
                        }
                    }
                    li.breadcrumb-item.active {
                        &:before {
                            font-size: 13px;
                            color: ${colors.text5};
                        }
                    }
                }
            }
        }

        @media only screen and (max-width: 767px) {
            height: 155px;
            padding-top: 45px;
        }
    }
`;