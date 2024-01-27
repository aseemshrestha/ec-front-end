import styled from "styled-components";
import { colors } from "../elements";

export const Styles = styled.div`
    button.nav-search {
        padding: 12px 0 0 10px;
        background: transparent;
        border: none;

        i {
            font-size: 18px;
            color    : ${colors.text1};
        }
    }

    .search-wrap {
        position        : fixed;
        top             : 0;
        left            : 0;
        width           : 100%;
        height          : 100%;
        z-index         : 1000;
        background-color: rgba(255, 255, 255, 0.96);
        transform       : scale(1, 0);
        transform-origin: bottom center;
        transition : transform 0.7s ease;

        .search-overlay {
            width           : 100%;
            height          : 100%;
            background-color: rgba(255, 255, 255, 0.96);
            position        : absolute;
            top             : 0;
            left            : 0;
            right           : 0;
            bottom          : 0;
            z-index         : 999;
            opacity         : 0.7;
        }

        .search-inner {
            position       : absolute;
            width          : 100%;
            height         : 100%;
            display        : flex;
            justify-content: center;
            align-items    : center;

            form.search-form {
                position  : relative;
                z-index   : 9991;
                width     : 50%;
                margin-top: -80px;

                input {
                    width        : 100%;
                    height       : 65px;
                    border       : none;
                    border-bottom: 2px solid ${colors.border3};
                    font-size    : 26px;
                    padding      : 0 10px 0 10px;
                    margin-bottom: 0;
                    color        : ${colors.black2};
                    position     : relative;
                    box-shadow   : none;
                    border-radius: 0;
                    outline      : none;
                    background   : transparent;

                    @include input-placeholder {
                        font-style : italic;
                        color      : ${colors.black1};
                        font-weight: 300;
                    }
                }

                button.close-search {
                    position : absolute;
                    top      : 15px;
                    right    : 5px;
                    font-size: 26px;
                    color    : ${colors.red};
                    background: transparent;
                    border: none;
                }
            }
        }
    }

    .search-wrap.active {
        transform-origin: top center;
        transform       : scale(1, 1);
    }
`;