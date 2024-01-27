import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
   .faq-page {
      .faq-area {
         padding: 80px 0 50px;
         .faq-box {
            .sec-title {
               h6 {
                  color: ${colors.blue};
                  text-transform: uppercase;
                  font-weight: 600;
                  display: inline-block;
                  margin-bottom: 12px;
                  position: relative;
                  &:before {
                     position: absolute;
                     content: "";
                     background: ${colors.dark};
                     width: 30px;
                     height: 2px;
                     left: 105%;
                     bottom: 10px;
                  }
                  &:after {
                     position: absolute;
                     content: "";
                     background: ${colors.blue};
                     width: 38px;
                     height: 2px;
                     left: 105%;
                     bottom: 6px;
                  }
               }
               h3 {
                  color: ${colors.dark};
                  font-weight: 600;
                  margin-bottom: 50px;

                  @media (max-width: 991px) {
                     font-size: 20px;
                     margin-bottom: 30px;
                  }
               }
            }
            .faq-item {
               .accordion {
                  .accordion-item {
                     border: none;
                     background: ${colors.bg2};
                     margin-bottom: 30px;
                     border-radius: 10px;
                     overflow: hidden;
                     button.accordion-button {
                        box-shadow: none;
                        background-color: ${colors.dark};
                        padding: 0;
                        font-size: 18px;
                        color: ${colors.border3};
                        font-weight: 600;
                        padding: 15px 20px;
                        padding-left: 10%;
                        position: relative;
                        span {
                           position: absolute;
                           top: 0;
                           left: 0;
                           background-color: ${colors.blue};
                           width: 50px;
                           height: 100%;
                           text-align: center;
                           padding-top: 12px;
                           padding-left: 10px;
                           font-size: 22px;
                           color: #fff;
                           &:before {
                              position: absolute;
                              content: "";
                              background: ${colors.blue};
                              width: 24px;
                              height: 100%;
                              top: 0;
                              right: -13px;
                              transform: skew(22deg);
                              z-index: 1;
                           }
                        }
                     }
                     .accordion-desc {
                        p { 
                           font-size: 15px;
                           color: ${colors.text2};
                           letter-spacing: 0.5px;
                           line-height: 27px;
                           padding: 20px;
                        }
                     }
                  }
               }
            }
         }

         .faq-form-box {
            padding: 35px 40px 40px;
            border-radius: 15px;
            background: ${colors.bg2};
            border: 1px solid ${colors.border1};
            .sec-title {
               h6 {
                  color: ${colors.blue};
                  text-transform: uppercase;
                  font-weight: 600;
                  display: inline-block;
                  margin-bottom: 20px;
                  position: relative;
                  &:before {
                     position: absolute;
                     content: "";
                     background: ${colors.dark};
                     width: 30px;
                     height: 2px;
                     left: 105%;
                     bottom: 10px;
                  }
                  &:after {
                     position: absolute;
                     content: "";
                     background: ${colors.blue};
                     width: 38px;
                     height: 2px;
                     left: 105%;
                     bottom: 6px;
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
                        bottom: 10px;
                     }
                     &:after {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 38px;
                        height: 2px;
                        right: 105%;
                        bottom: 6px;
                     }
                  }
               }
               h4 {
                  color: ${colors.dark};
                  font-weight: 600;
                  margin-bottom: 30px;

                  @media (max-width: 991px) {
                     font-size: 18px;
                     margin-bottom: 15px;
                  }
               }
            }

            form.faq_form {
               p.form-box {
                  padding-bottom: 20px;
                  margin-bottom: 6px;
                  position: relative;
                  input.form-control {
                     font-size: 15px;
                     color: ${colors.black2};
                     border: none;
                     border-bottom: 1px solid ${colors.border3};
                     background: transparent;
                     border-radius: 0;
                     padding: 8px 0;
                     &::placeholder {
                        font-size: 15px;
                        color: ${colors.black2};
                        font-weight: 400;
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
                  select.form-select {
                     font-size: 15px;
                     color: ${colors.black2};
                     border: none;
                     border-bottom: 1px solid ${colors.border3};
                     background: transparent;
                     border-radius: 0;
                     padding: 8px 0;
                     box-shadow: none;
                     appearance:none;
                     background-image:
                        linear-gradient(45deg, transparent 50%, gray 50%),
                        linear-gradient(135deg, gray 50%, transparent 50%),
                        linear-gradient(to right, #ccc, #ccc);
                     background-position:
                        calc(100% - 20px) calc(1em + 2px),
                        calc(100% - 15px) calc(1em + 2px),
                        calc(0% - 2.5em) 0.5em;
                     background-size:
                        5px 5px,
                        5px 5px,
                        1px 1.5em;
                     background-repeat: no-repeat;
                     option {
                        color: ${colors.black2};
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
                  margin-top: 20px;
                  &:hover {
                        background: linear-gradient(90deg,${colors.blue} 0%,${colors.blue2} 100%);
                  }
                  &:focus {
                        box-shadow: none;
                  }
               }
            }

            @media (max-width: 1199px) {
               padding: 25px 25px 30px;
            }
         }

         @media (max-width: 767px) {
            padding: 40px 0 45px;
         }
      }
   }
`;