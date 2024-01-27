import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
   .blog-page {
      .blog-area {
         padding: 80px 0;
         .blog-large {
            margin-bottom: 80px;
            .blog-img {
               img {
                  border-radius: 15px;

                  @media (max-width: 767px) {
                     margin-bottom: 15px;
                  }
               }
            }
            .blog-content {
               padding: 40px 30px 0;
               h2 {
                  margin-bottom: 30px;
                  a {
                     color: ${colors.dark};
                     font-weight: 600;
                     letter-spacing: 0.5px;
                     line-height: 42px;
                     &:hover {
                        color: ${colors.blue};
                     }

                     @media (max-width: 1399px) {
                        font-size: 30px;
                        letter-spacing: 0.3px;
                        line-height: 0;
                     }

                     @media (max-width: 1199px) {
                        font-size: 22px;
                     }

                     @media (max-width: 767px) {
                        font-size: 18px;
                        font-weight: 500;
                     }
                  }

                  @media (max-width: 1399px) {
                     margin-bottom: 20px;
                  }

                  @media (max-width: 1199px) {
                     margin-bottom: 6px;
                     line-height: 30px;
                  }
               }
               p {
                  font-size: 16px;
                  color: ${colors.dark};
                  line-height: 33px;
                  letter-spacing: 0.5px;

                  @media (max-width: 767px) {
                     display: none;
                  }
               }

               .author-date {
                  margin-top: 30px;
                  .blog-author {
                     margin-right: 40px;
                     img {
                        max-width: 50px;
                        border-radius: 50%;
                        margin-right: 10px;
                     }
                     a {
                        font-size: 16px;
                        color: ${colors.blue};
                        font-weight: 500;
                        text-transform: uppercase;
                        padding-top: 12px;
                        &:hover {
                            color: ${colors.dark};
                        }
                     }

                     @media (max-width: 991px) {
                        margin-right: 10px;
                     }
                  }
                  .blog-date {
                     margin-top: 8px;
                     span {
                        font-size: 14px;
                        color: ${colors.text2};
                        font-weight: 500;
                        i {
                           font-size: 24px;
                           color: ${colors.blue};
                           transform: translateY(15%);
                        }
                     }
                  }

                  @media (max-width: 1199px) {
                     margin-top: 15px;
                  }
               }

               @media (max-width: 1399px) {
                  padding: 0 8px 0;
               }
            }

            @media (max-width: 767px) {
               margin-bottom: 40px;
            }
         }

         .blog-item {
            margin-bottom: 80px;
            .blog-image {
               position: relative;
               border-radius: 15px;
               overflow: hidden;
               img {

               }
               .date-box {
                  position: absolute;
                  top: 0;
                  left: 0;
                  span {
                     font-size: 15px;
                     color: #ffffff;
                     background: ${colors.blue};
                     display: inline-block;
                     width: 75px;
                     height: 65px;
                     text-align: center;
                     font-weight: 500;
                     padding-top: 12px;
                     padding-left: 8px;
                     position: relative;
                     strong {
                           font-size: 30px;
                           display: block;
                           line-height: 0.8;
                     }
                     &:before {
                           position: absolute;
                           content: "";
                           background: ${colors.blue};
                           width: 24px;
                           height: 100%;
                           top: 0;
                           right: -12px;
                           transform: skew(-20deg);
                           z-index: 1;
                     }
                  }
               }
            }

            .blog-text {
               position: relative;
               padding: 20px 30px 0;
               h4 {
                  margin-bottom: 20px;
                  a {
                     color: ${colors.dark};
                     line-height: 32px;
                     &:hover {
                           color: ${colors.blue};
                     }

                     @media (max-width: 1199px) {
                        font-size: 19px;
                     }
                  }

                  @media (max-width: 767px) {
                     margin-bottom: 10px;
                  }
               }
               .blog-author {
                  img {
                     max-width: 50px;
                     border-radius: 50%;
                     margin-right: 10px;
                  }
                  a {
                     font-size: 16px;
                     color: ${colors.blue};
                     font-weight: 500;
                     text-transform: uppercase;
                     padding-top: 12px;
                     &:hover {
                           color: ${colors.dark};
                     }
                  }
               }
               a.btn-readmore {
                  background: transparent;
                  color: ${colors.text3};
                  text-align: center;
                  font-size: 16px;
                  padding: 0;
                  font-weight: 500;
                  position: absolute;
                  bottom: 15px;
                  right: 30px;
                  &:before {
                     position: absolute;
                     content: "";
                     background: ${colors.text5};
                     width: 78%;
                     height: 1px;
                     bottom: 2px;
                     left: 1px;
                  }
                  &:after {
                     position: absolute;
                     content: "";
                     background: ${colors.text5};
                     width: 78%;
                     height: 1px;
                     bottom: 0;
                     left: 1px;
                  }
                  i {
                     font-size: 18px;
                     color: ${colors.text4};
                     margin-left: 3px;
                     transform: translateY(25%);
                  }
                  &:hover {
                     color: ${colors.blue};
                     border-color: ${colors.blue};
                     &:before, &:after {
                           background: ${colors.blue};
                     }
                     i {
                           color: ${colors.blue};
                     }
                  }

                  @media (max-width: 1199px) {
                     right: 0;
                  }

                  @media (max-width: 991px) {
                     display: none;
                  }
               }

               @media (max-width: 1199px) {
                  padding: 10px 5px 0;
               }
            }

            @media (max-width: 767px) {
               margin-bottom: 40px;
            }
         }

         .pagination-box {
            ul {
               li {
                  margin: 0 8px;
                  a {
                     font-size: 17px;
                     color: ${colors.black2};
                     width: 38px;
                     height: 38px;
                     display: block;
                     padding-top: 7px;
                     border-radius: 50%;

                     &:hover {
                           background: ${colors.blue};
                           color: #ffffff;
                     }

                     @media (max-width: 767px) {
                        font-size: 15px;
                        width: 35px;
                        height: 35px;
                     }
                  }

                  @media (max-width: 767px) {
                     margin: 0 5px;
                  }
               }

               li.active {
                  a {
                     background: ${colors.blue};
                     color: #ffffff;
                  }
               }
            }
         }

         @media (max-width: 991px) {
            padding: 45px 0 40px;
         }
      }
   }
`;