import styled from "styled-components";
import { colors } from './../../../inc/elements';

export const Styles = styled.div`
   .error-page {
      .error-area {
         padding: 80px 0;
         .error-box {
            img {
               max-width: 450px;
               margin-bottom: 40px;

               @media (max-width: 500px) {
                  max-width: 290px;
               }
            }

            h2 {
               color: ${colors.dark};
               font-weight: 600;
               margin-bottom: 20px;

               @media (max-width: 500px) {
                  font-size: 24px;
                  margin-bottom: 10px;
               }
            }

            p {
               font-size: 22px;
               color: ${colors.black2};
               font-weight: 500;
               max-width: 550px;
               margin: auto;
               margin-bottom: 30px;

               @media (max-width: 500px) {
                  font-size: 17px;
                  margin-bottom: 25px;
               }
            }

            a {
               font-size: 20px;
               color: #ffffff;
               background: linear-gradient(90deg,#312EB1 0%,#00b6ec 100%);
               padding: 12px 35px;
               border-radius: 30px;
               display: inline-block;
               font-weight: 500;
               &:hover {
                  background: linear-gradient(90deg,${colors.blue} 0%,${colors.blue2} 100%);
               }

               @media (max-width: 500px) {
                  font-size: 17px;
               }
            }
         }
      }
   }
`;