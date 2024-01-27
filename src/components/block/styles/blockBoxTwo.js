import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .block-area2 {
        padding: 80px 0;
        .block-box {
            border: 2px solid;
            padding: 30px;
            border-radius: 15px;
            .block-icon {
                i {
                    font-size: 42px;
                    margin-right: 20px;

                    @media (max-width: 991px) {
                        margin-right: 10px;
                    }

                    @media (max-width: 767px) {
                        margin-right:  20px;
                    }
                }
            }
            .block-content {
                h5 {
                    color: ${colors.dark};
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 15px;

                    @media (max-width: 767px) {
                        margin-bottom:  8px;
                    }
                }
                p {
                    font-size: 16px;
                    color: ${colors.text1};
                    font-weight: 400;
                }
            }

            @media (max-width: 1199px) {
                padding: 25px;
            }

            @media (max-width: 991px) {
                padding: 10px;
            }

            @media (max-width: 767px) {
                margin-bottom:  20px;
                padding: 20px;
            }
        }

        .block-box.block1 {
            border-color: #f3f3c9;
            i {
                color: #c0c195;
            }
        }
        .block-box.block2 {
            border-color: #d1efe5;
            i {
                color: #88ada1;
            }
        }
        .block-box.block3 {
            border-color: #baefff;
            i {
                color: #00b1e6;
            }
        }

        @media (max-width: 767px) {
            padding: 20px 0;
        }
    }
`;