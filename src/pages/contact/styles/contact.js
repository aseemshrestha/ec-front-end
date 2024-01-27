import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
   .contact-page {
      .contact-area {
         padding: 80px 0;
         .contact-block {
            .block-box {
               border: 2px solid;
               padding: 25px 35px;
               border-radius: 15px;
               .block-icon {
                  i {
                     font-size: 32px;
                     margin-top: 5px;
                     margin-right: 25px;
                     border-radius: 50%;
                     display: block;
                     width: 75px;
                     height: 75px;
                     text-align: center;
                     padding-top: 19px;

                     @media (max-width: 1199px) {
                        margin-right: 12px;
                        font-size: 24px;
                        width: 60px;
                        height: 60px;
                        padding-top: 16px;
                     }

                     @media (max-width: 991px) {
                        margin-right: 5px;
                        font-size: 20px;
                        width: 45px;
                        height: 45px;
                        padding-top: 12px;
                     }
                  }
               }
               .block-content {
                  h5 {
                     color: ${colors.dark};
                     font-weight: 700;
                     text-transform: uppercase;
                     margin-bottom: 15px;

                     @media (max-width: 1199px) {
                        font-size: 18px;
                        font-weight: 600;
                        margin-bottom: 5px;
                     }

                     @media (max-width: 991px) {
                        font-size: 16px;
                     }
                  }

                  p {
                     font-size: 16px;
                     color: ${colors.text1};
                     font-weight: 400;

                     @media (max-width: 1199px) {
                        font-size: 14px;
                     }
                  }
               }

               @media (max-width: 1399px) {
                  padding: 15px 15px;
               }

               @media (max-width: 1199px) {
                  padding: 12px 12px;
               }

               @media (max-width: 991px) {
                  padding: 5px 5px;
               }

               @media (max-width: 767px) {
                  margin-bottom: 20px;
               }
            }

            .block-box.block1 {
               border-color: #f3f3c9;
               i {
                  background: #c0c195;
                  color: #ffffff;
               }
            }
            .block-box.block2 {
               border-color: #d1efe5;
               i {
                  background: #88ada1;
                  color: #ffffff;
               }
            }
            .block-box.block3 {
               border-color: #baefff;
               i {
                  background: #00b1e6;
                  color: #ffffff;
               }
            }
         }

         @media (max-width: 767px) {
            padding: 45px 0 25px;
         }
      }
   }

   .google-map-area {
      position: relative;
      height: 755px;
      background: ${colors.bg2};
      overflow: hidden;
      .google-map {
         position: absolute;
         top: 0;
         left: 0;
         width: 60%;
         height: 100%;
         z-index: 111;
      }

      .contact-form {
         background: #ffffff;
         position: relative;
         z-index: 999;
         padding: 40px 45px 45px;
         border-radius: 20px;
         margin-top: 80px;
         .sec-title {
            h6 {
               color: ${colors.blue};
               text-transform: uppercase;
               font-weight: 600;
               display: inline-block;
               margin-bottom: 5px;
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
               margin-bottom: 30px;

               @media (max-width: 991px) {
                  font-size: 20px;
                  margin-bottom: 20px;
               }
            }
         }

         form.contact_form {
            p.form-box {
               padding   : 0;
               width     : auto;
               height    : auto;
               background: transparent;
               border    : none;
               margin-bottom : 30px;
               position  : relative;

               textarea.form-control {
                  width           : 100%;
                  height          : 150px;
                  background      : transparent;
                  border          : 1px solid ${colors.border3};
                  font-size       : 15px;
                  padding         : 15px 20px;
                  color           : ${colors.black2};
                  border-radius   : 25px;

                  &:focus {
                        border-color: ${colors.blue};
                        box-shadow: none;
                  }

                  &::placeholder {
                        font-size  : 15px;
                        color      : ${colors.text2};
                  }
               }

               input.form-control {
                  width           : 100%;
                  height          : 50px;
                  background      : transparent;
                  border          : 1px solid ${colors.border3};
                  font-size       : 15px;
                  padding         : 15px 20px;
                  color           : ${colors.black2};
                  border-radius   : 17px;

                  &:focus {
                        border-color: ${colors.blue};
                        box-shadow: none;
                  }

                  &::placeholder {
                        font-size  : 15px;
                        color      : ${colors.text2};
                  }

                  @media (max-width: 991px) {
                     font-size: 14px;
                     padding: 5px 12px;
                     height: 42px;
                  }
               }

               label.error {
                  font-size: 14px;
                  color: ${colors.red};
                  position: absolute;
                  top: 100%;
                  left: 0;
                  line-height: 18px;
                  letter-spacing: 0;
               }

               @media (max-width: 991px) {
                  margin-bottom: 18px;
               }
            }

            button.submit-btn {
               font-size: 20px;
               color: #ffffff;
               background: linear-gradient(90deg,${colors.blue2} 0%,${colors.blue} 100%);
               border: none;
               width: 100%;
               height: 50px;
               border-radius: 30px;
               display: inline-block;
               font-weight: 500;
               &:hover {
                     background: linear-gradient(90deg,${colors.blue} 0%,${colors.blue2} 100%);
               }
               &:focus {
                     box-shadow: none;
               }

               @media (max-width: 991px) {
                  font-size: 18px;
                  height: 45px;
               }
            }
         }

         pre.success-message {
            position: fixed;
            bottom: 40px;
            right: 20px;
            z-index: 99999;
            background: ${colors.green};
            color: #ffffff;
            margin-bottom: 0;
            padding: 10px 15px;
            border-radius: 10px;
            p {
               font-size: 20px;
               font-weight: 500;
               i {
                  font-size: 20px;
               }
            }
         }

         @media (max-width: 991px) {
            padding: 22px 25px 25px;
         }
      }

      @media (max-width: 991px) {
         height: 630px;
      }

      @media (max-width: 767px) {
         height: 730px;
      }
   }
`;