/*===========================================
Template Name: Afili - React Js Creative Agency Template
Author: Md Tahmidur Rahman
Author URL: http://snazzytheme.com/
Version: 1.0
==============================================*/

import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./elements";

export const GlobalStyle = createGlobalStyle`
    html {
        color      : ${colors.bg1};
        font-size  : 13px;
        line-height: 1.4;
    }

    ::-moz-selection {
        background : #b3d4fc;
        text-shadow: none;
    }

    ::selection {
        background : #b3d4fc;
        text-shadow: none;
    }

    hr {
        display   : block;
        height    : 1px;
        border    : 0;
        border-top: 1px solid ${colors.border3};
        margin    : 1em 0;
        padding   : 0;
    }

    audio,
    canvas,
    iframe,
    img,
    svg,
    video {
        vertical-align: middle;
    }

    fieldset {
        border : 0;
        margin : 0;
        padding: 0;
    }

    textarea {
        resize: vertical;
    }

    body {
        font-size     : 13px;
        background    : #ffffff;
        color         : ${colors.text1};
        letter-spacing: 0.3px;
        font-family   : ${fonts.karla};
        font-weight   : 400;
    } 
    
    h1,
    h2, 
    h3, 
    h4, 
    h5, 
    h6 {
        margin : 0;
        font-family   : ${fonts.livvic};
    }

    h1,
    h1 a {
        font-size: 40px;
        font-family   : ${fonts.livvic};

        @media only screen and (max-width: 767px) {
            font-size: 30px;
        }

        @media only screen and (max-width: 575px) {
            font-size: 26px;
        }
    }

    h2,
    h2 a {
        font-size: 32px;
        font-family   : ${fonts.livvic};
    }

    h3,
    h3 a {
        font-size: 28px;
        font-family   : ${fonts.livvic};

        @media only screen and (max-width: 767px) {
            font-size: 26px;
        }

        @media only screen and (max-width: 575px) {
            font-size: 24px;
        }
    }

    h4,
    h4 a {
        font-size: 24px;
        font-family   : ${fonts.livvic};
    }

    h5,
    h5 a {
        font-size: 20px;
        font-family   : ${fonts.livvic};

        @media only screen and (max-width: 575px) {
            font-size: 16px;
        }
    }

    h6,
    h6 a {
        font-size: 16px;
        font-family   : ${fonts.livvic};
    }

    p {
        padding : 0;
        margin : 0;
        font-family   : ${fonts.livvic};
    }

    ul {
        padding: 0;
        margin : 0;
        font-family   : ${fonts.livvic};
    }

    a,
    a:active,
    a:focus,
    a:hover,
    button:focus,
    button:hover {
        text-decoration: none;
        outline        : none;
    }

    a,
    button {
        transition: all 0.2s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
    }

    .padding-fix {
        padding-left : 0;
        padding-right: 0;
    }

    .padding-fix-r {
        padding-right: 0;
    }

    .padding-fix-l {
        padding-left: 0;
    }

    .margin-fix {
        margin-left : 0;
        margin-right: 0;
    }

    a.close-search {
        position : absolute;
        top      : 25px;
        right    : 5px;
        font-size: 26px;
        color    : ${colors.red};
    }

    .main-wrapper2 {
        .testimonial-area {
            padding-top: 360px !important;

            @media (max-width: 991px) {
                padding-top: 340px !important;
            }

            @media (max-width: 767px) {
                padding-top: 215px !important;
            }

            @media (max-width: 506px) {
                padding-top: 235px !important;
            }
        }
    }

    @media (max-width: 991px) {
        .col-md-0 {
            display: none;
        }
    }
`;
