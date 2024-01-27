import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
   .blog-details-page {
      .blog-details-area {
         padding: 80px 0 50px;
         .blog-details-top {
            img.blog-details-img {
               border-radius: 15px;
               margin-bottom: 25px;
            }
            .blog-auth-date {
               margin-bottom: 25px;
               .blog-auth {
                  margin-right: 40px;
                  img {
                     max-width: 50px;
                     border-radius: 50%;
                     margin-right: 10px;

                     @media (max-width: 991px) {
                        max-width: 45px;
                        height: 45px;
                        margin-right: 5px;
                     }
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

                     @media (max-width: 991px) {
                        font-size: 14px;
                        padding-top: 13px;
                     }
                  }

                  @media (max-width: 991px) {
                     margin-right: 10px;
                  }
               }
               .blog-date {
                  margin-top: 7px;
                  margin-right: 40px;
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

                  @media (max-width: 991px) {
                     margin-right: 10px;
                  }
               }
               .blog-tag {
                  margin-top: 7px;
                  margin-right: 40px;
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

                  @media (max-width: 991px) {
                     margin-right: 10px;
                  }
               }
               .blog-comment {
                  margin-top: 7px;
                  margin-right: 40px;
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

                  @media (max-width: 991px) {
                     margin-right: 0;
                  }
               }

               @media (max-width: 575px) {
                  margin-bottom: 10px;
               }
            }
         }

         .blog-heading {
            h4 {
               color: ${colors.black1};
               font-weight: 600;
               line-height: 30px;
               letter-spacing: 0.5px;
               margin-bottom: 25px;

               @media (max-width: 991px) {
                  font-size: 20px;
                  margin-bottom: 10px;
               }
            }
         }
         .blog-desc {
            p {
               font-size: 16px;
               color: ${colors.text2};
               line-height: 28px;
               margin-bottom: 30px;

               @media (max-width: 991px) {
                  font-size: 15px;
               }
            }
         }
         .quote-box {
            margin-bottom: 25px;
            .quote-icon {
               i {
                  font-size: 44px;
                  color: ${colors.blue};
                  display: block;
                  margin-top: 2px;
                  margin-right: 12px;

                  @media (max-width: 991px) {
                     font-size: 32px;
                     margin-right: 8px;
                  }
               }
            }
            .quote-text {
               p {
                  font-size: 20px;
                  color: ${colors.black1};
                  font-weight: 600;
                  line-height: 30px;
                  
                  @media (max-width: 991px) {
                     font-size: 17px;
                  }
               }
            }
            
         }

         .ico-overview {
            margin-bottom: 40px;
            .ico-img {
               img {
                  border-radius: 20px;
               }
            }
            .ico-content {
               h5 {
                  color: ${colors.black1};
                  font-weight: 700;
                  margin-bottom: 15px;
               }
               p {
                  font-size: 15px;
                  color: ${colors.text1};
                  line-height: 30px;
                  margin-bottom: 15px;
               }
               span {
                  font-size: 18px;
                  color: ${colors.red};
                  font-weight: 600;
                  display: block;
                  margin-bottom: 25px;
                  line-height: 25px;
               }
               ul {
                  li {
                     font-size: 16px;
                     color: ${colors.text2};
                     line-height: 25px;
                     margin-bottom: 10px;
                     i {
                        font-size: 26px;
                        color: ${colors.blue};
                        margin-right: 8px;
                        float: left;
                        height: 35px;
                        transform: translateY(8%);
                     }

                     &:last-child {
                        margin-bottom: 0;
                     }
                  }
               }
            }
         }

         .blog-tag_share {
            margin-bottom: 40px;
            .blog-tag {
               ul.tags {
                  li {
                     color : ${colors.text3};
                     a {
                        font-size: 13px;
                        color: ${colors.text2};
                        border: 1px solid ${colors.border3};
                        padding: 5px 12px;
                        display: inline-block;
                        border-radius: 15px;
                        &:hover {
                           background: ${colors.blue};
                           color: #ffffff;
                           border-color: ${colors.blue};
                        }

                        @media (max-width: 991px) {
                           padding: 3px 8px;
                        }
                     }
                     &:first-child {
                        font-size: 15px;
                        color: ${colors.black1};
                        font-weight: 600;
                        margin-right: 10px;
                     }
                  }
               }
            }
            .blog-share {
               ul.social {
                  li {
                     a {
                        i {
                           font-size: 14px;
                           color: #ffffff;
                           display: inline-block;
                           width: 32px;
                           height: 32px;
                           text-align: center;
                           padding-top: 10px;
                           border-radius: 20px;
                           &:hover {
                              background: ${colors.blue} !important;
                           }
                        }
                        
                        i.fa-facebook-f {
                           background: #4267b2;
                        }
                        i.fa-twitter {
                           background: #1da1f2;
                        }
                        i.fa-linkedin-in {
                           background: #2867b2;
                        }
                        i.fa-instagram {
                           background: #3f729b;
                        }
                     }
                  }
               }
            }
         }

         .blog-comments {
            margin-bottom: 45px;
            h5 {
               color: ${colors.black1};
               font-weight: 600;
               margin-bottom: 35px;
               position: relative;
               &:before {
                  position: absolute;
                  content: "";
                  background: ${colors.blue};
                  width: 60px;
                  height: 1px;
                  bottom: -10px;
                  left: 0;
               }
               &:after {
                  position: absolute;
                  content: "";
                  background: ${colors.blue};
                  width: 60px;
                  height: 1px;
                  bottom: -8px;
                  left: 0;
               }
            }
            .comment-box {
               margin-bottom: 25px;
               .comment-image {
                  img {
                     max-width : 85px;
                     border-radius : 15px;
                     margin-right : 20px;
                  }
               }
               .comment-content {
                  background: ${colors.bg2};
                  padding: 20px 25px;
                  border-radius: 25px;
                  .content-title {
                     .comment-writer {
                        h6 {
                              color: ${colors.black2};
                              font-weight: 600;
                              margin-bottom : 10px;
                        }
                        p {
                              font-size : 12px;
                              color: ${colors.text3};
                              margin-bottom: 5px;
                        }
                     }
                     .reply-btn {
                        button {
                           font-size: 14px;
                           color: #ffffff;
                           border: none;
                           padding: 4px 15px 4px 12px;
                           font-weight: 500;
                           display: inline-block;
                           background: ${colors.blue};
                           border-radius: 0 5px 5px 0;
                           position: relative;
                           &:before {
                              position: absolute;
                              content: "";
                              background: ${colors.blue};
                              width: 15px;
                              height: 100%;
                              top: 0;
                              left: -8px;
                              transform: skew(-25deg);
                              z-index: 1;
                           }
                           &:hover {
                              color : ${colors.black1};
                           }
                        }
                     }
                  }
                  .comment-desc {
                     p {
                        font-size: 14px;
                        color: ${colors.text2};
                        line-height: 25px;
                     }
                  }
               }
               &:last-child {
                  border-bottom : none;
                  padding-bottom : 0;
                  margin-bottom : 0;
               }
            }

            .comment-box.comment-active {
               margin-left: 60px;
            }
         }

         .comment-form {
            h5 {
               color: ${colors.black1};
               font-weight: 600;
               margin-bottom: 35px;
               position: relative;
               &:before {
                  position: absolute;
                  content: "";
                  background: ${colors.blue};
                  width: 60px;
                  height: 1px;
                  bottom: -10px;
                  left: 0;
               }
               &:after {
                  position: absolute;
                  content: "";
                  background: ${colors.blue};
                  width: 60px;
                  height: 1px;
                  bottom: -8px;
                  left: 0;
               }
            }
            form.comment_form {
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
               }

               button.comment-btn {
                  font-size: 20px;
                  color: #ffffff;
                  background: linear-gradient(90deg,${colors.blue2} 0%,${colors.blue} 100%);
                  border: none;
                  width: 250px;
                  height: 50px;
                  border-radius: 30px;
                  display: inline-block;
                  font-weight: 500;
                  margin: 30px 0;
                  &:hover {
                        background: linear-gradient(90deg,${colors.blue} 0%,${colors.blue2} 100%);
                  }
                  &:focus {
                        box-shadow: none;
                  }
               }
            }
         }

         .blog-search {
            border : 1px solid ${colors.border3};
            padding: 20px 30px 30px;
            border-radius : 15px;
            margin-bottom: 30px;
            h4 {
               color : ${colors.dark};
               font-weight: 600;
               margin-bottom: 15px;
            }

            form {
               position: relative;
               input {
                  width : 100%;
                  height: 42px;
                  border: 1px solid ${colors.blue};
                  color : ${colors.black1};
                  border-radius: 10px;
                  padding-left: 15px;
                  &:focus {
                     border-color : ${colors.blue};
                  }
                  &::placeholder {
                     font-size  : 17px;
                     font-style : italic;
                     color      : ${colors.black2};
                  }
               }
               button {
                  position: absolute;
                  width: 45px;
                  height: 100%;
                  top: 0;
                  right: 0;
                  background: ${colors.blue};
                  border-radius: 0 10px 10px 0;
                  padding-top: 5px;
                  border: none;
                  font-size: 22px;
                  color: #ffffff;
                  &:before {
                     position: absolute;
                     content: "";
                     background: ${colors.blue};
                     width: 11px;
                     height: 100%;
                     top: 0;
                     left: -6px;
                     transform: skew(-15deg);
                     z-index: 1;
                  }
                  &:hover {
                     color : ${colors.black1};
                  }
               }
            }

            @media (max-width: 1399px) {
               padding: 10px 15px 15px;
            }
         }

         .blog-category {
            border : 1px solid ${colors.border3};
            padding: 20px 30px 30px;
            border-radius : 15px;
            margin-bottom: 30px;
            h4 {
               color : ${colors.dark};
               font-weight: 600;
               margin-bottom: 15px;
            }

            ul {
               li {
                  a {
                     display: block;
                     background: ${colors.bg2};
                     color: ${colors.text2};
                     font-size: 15px;
                     font-weight: 500;
                     padding: 12px 20px;
                     border-radius: 10px;
                     margin-bottom: 10px;
                     &:hover {
                        background: ${colors.blue};
                        color: #ffffff;
                     }

                     @media (max-width: 1399px) {
                        padding: 8px 15px;
                     }
                  }
                  &:last-child {
                     a {
                        margin-bottom: 0;
                     }
                  }
               }
            }

            @media (max-width: 1399px) {
               padding: 10px 15px 15px;
            }
         }

         .recent-blog {
            border : 1px solid ${colors.border3};
            padding: 20px 30px 30px;
            border-radius : 15px;
            margin-bottom: 30px;
            h4 {
               color : ${colors.dark};
               font-weight: 600;
               margin-bottom: 15px;
            }

            .blog-items {
               .item-box {
                  margin-bottom: 20px;
                  .item-img {
                     a {
                        img {
                           max-width: 80px;
                           border-radius: 5px;
                           margin-right: 12px;

                           @media (max-width: 1199px) {
                              max-width: 70px;
                              margin-right: 5px;
                           }
                        }
                     }
                  }

                  .item-content {
                     padding-top: 5px;
                     p.title {
                        margin-top: 5px;
                        a {
                           font-size: 15px;
                           color: ${colors.black2};
                           font-weight: 500;
                           &:hover {
                              color : ${colors.blue};
                           }
                        }
                     }

                     span.date {
                        font-size : 14px;
                        color : ${colors.text3};
                     }

                     @media (max-width: 1199px) {
                        padding-top: 0;
                     }
                  }

                  &:last-child {
                     margin-bottom: 0;
                  }
               }
            }

            @media (max-width: 1399px) {
               padding: 10px 15px 15px;
            }
         }

         .blog-tags {
            border : 1px solid ${colors.border3};
            padding: 20px 30px 12px;
            border-radius : 15px;
            h4 {
               color : ${colors.dark};
               font-weight: 600;
               margin-bottom: 15px;
            }

            .tag-box {
               a {
                  font-size: 15px;
                  color: ${colors.text2};
                  border: 1px solid ${colors.border3};
                  padding: 5px 12px;
                  margin: 0px 15px 18px 0px;
                  display: inline-block;
                  border-radius: 15px;
                  &:hover {
                     color: #ffffff;
                     border-color: ${colors.blue};
                     background: ${colors.blue};
                  }

                  @media (max-width: 1399px) {
                     margin: 0px 12px 12px 0px;
                  }
                  
                  @media (max-width: 1199px) {
                     font-size: 14px;
                     margin: 0px 6px 8px 0px;
                     padding: 4px 8px;
                  }
               }
            }

            @media (max-width: 1399px) {
               padding: 10px 15px 15px;
            }
         }

         @media (max-width: 1399px) {
            padding: 45px 0 40px;
         }
      }
   }
`;