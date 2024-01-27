import styled from "styled-components";

export const Styles = styled.div`
    .testimonial-page {
        .testimonial-area {
            background: #ffffff;
            padding: 80px 0 185px;

            @media (max-width: 767px) {
                padding: 40px 0 155px;
            }
        }

        .counter-area {
            .counter-container {
                .counter-row {
                    @media (max-width: 767px) {
                        padding: 55px 55px 28px;
                    }
                }
            }
        }
        
        .team-slider-area {
            padding: 220px 0 80px;

            @media (max-width: 767px) {
                padding: 175px 0 40px;
            }

            @media (max-width: 575px) {
                padding: 315px 0 40px;
            }
        }
    }
`;