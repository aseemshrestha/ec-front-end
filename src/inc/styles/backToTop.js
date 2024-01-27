import styled from "styled-components";
import { colors } from "../elements";

export const Styles = styled.div`
    button.back-to-top { 
        background: ${colors.dark};
        position: fixed;
        bottom: 1px;
        right: 30px;
        width: 40px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        border: none;
        color: #ffffff;
        text-decoration: none;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease 0s;
        &:before {
            position: absolute;
            content: "";
            background: ${colors.dark};
            width: 18px;
            height: 100%;
            top: 0;
            right: -9px;
            transform: skew(19deg);
            z-index: 1;
            transition: all 0.2s ease;
        }
        &:after {
            position: absolute;
            content: "";
            background: ${colors.dark};
            width: 18px;
            height: 100%;
            top: 0;
            left: -9px;
            transform: skew(-19deg);
            z-index: 1;
            transition: all 0.2s ease;
        }
        &:hover {
            background: ${colors.blue};
            &:before, &:after {
                background: ${colors.blue};
            }
        }
    }

    button.back-to-top.active {
        bottom: 60px;
        opacity: 1;
        pointer-events: auto;
    }
`;