import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
    .service-page {
        .service-two-area {
            background: #ffffff;
            padding-bottom: 110px;
            .service-boxes {
                .service-box {
                    background: ${colors.bg2};
                    box-shadow: none;
                    &:before, &:after {
                        background: #ffffff;
                        box-shadow: none;
                    }
                    &:hover {
                        background: ${colors.dark};
                    }
                }
            }

            @media (max-width: 991px) {
                padding-bottom: 160px;
            }

            @media (max-width: 767px) {
                padding-bottom: 130px;
            }
        }

        .team-slider-area {
            padding-top: 360px;

            @media (max-width: 991px) {
                padding-top: 340px;
            }

            @media (max-width: 767px) {
                padding-top: 220px;
            }

            @media (max-width: 506px) {
                padding-top: 240px;
            }
        }
    }
`;