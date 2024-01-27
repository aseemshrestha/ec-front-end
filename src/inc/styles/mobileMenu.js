import styled from "styled-components";
import { colors } from "../elements";

export const Styles = styled.div`
  .mobile-menu-area {
    background: ${colors.dark};
    display: none;
    .mb-topbar {
      border-bottom: 1px solid ${colors.black2};
      padding: 8px 0;
      .topbar-item {
        p {
          font-size: 13px;
          color: ${colors.text4};
          padding-top: 3px;
          i {
            font-size: 16px;
            color: ${colors.blue};
            transform: translateY(5%);
            margin-right: 5px;
          }
        }
        ul.mb-social {
          li {
            a {
              font-size: 13px;
              color: ${colors.blue};
              display: inline-block;
              width: 15px;
              height: 15px;
              text-align: center;
              padding-top: 2px;
              &:hover {
                color: #ffffff;
                background: ${colors.red};
                border-color: ${colors.red};
              }
            }
          }
        }
      }
    }

    .mb-logo-area {
      padding: 18px 0;
      .mb-logo-box {
        .mb-menu-btn {
          margin-top: 5px;
          margin-right: 35px;
          position: relative;
          &:before {
            position: absolute;
            content: "";
            background: ${colors.text1};
            width: 1px;
            height: 25px;
            top: -1px;
            right: -16px;
          }
          button.menu-btn {
            background: transparent;
            border: none;
            padding: 0;
            i {
              font-size: 24px;
              color: ${colors.blue};
            }
          }
        }
        .mb-logo {
          a {
            img {
              max-width: 85px;
            }
          }
        }
      }
      .mb-search {
        button.nav-search {
          padding: 0;
          margin-top: 8px;
          i {
            font-size: 20px;
            color: ${colors.blue};
            &:hover {
              color: ${colors.red};
            }
          }
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  /* Mobile Menu Sidebar */
  .mb-sidebar {
    background: #ffffff;
    height: 100%;
    width: 320px;
    position: fixed;
    top: 0;
    left: -320px;
    overflow-y: auto;
    z-index: 9999;
    transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    display: none;
    .mb-sidebar-heading {
      background: ${colors.blue};
      padding: 25px;
      h5 {
        color: #ffffff;
        text-transform: uppercase;
      }
      button {
        background: transparent;
        border: none;
        i {
          font-size: 22px;
          color: #ffffff;
        }
      }
    }
    .mb-sidebar-menu {
      padding: 25px;
      .accordion {
        .accordion-item {
          border: none;
          h2.accordion-header {
            i {
              font-size: 17px;
              color: ${colors.blue};
              float: right;
              padding: 3px;
            }
            &:hover {
              color: ${colors.blue};
              i {
                border-color: ${colors.blue};
              }
            }
            button.accordion-button {
              padding: 0;
              background: transparent;
              box-shadow: none;
              font-size: 14px;
              color: ${colors.black1};
              background-color: #ffffff;
              text-transform: uppercase;
              font-weight: 500;
              border: none;
              padding: 15px 0;
              margin-bottom: 0;
              border-bottom: 1px solid #eeeeee;
              cursor: pointer;
              &:after {

              }
            }
          }
          .accordion-collapse {
            .accordion-body {
              padding: 0;
              ul {
                li {
                  border-bottom: 1px solid ${colors.border1};
                  a {
                    font-size: 13px;
                    color: ${colors.text1};
                    display: block;
                    padding: 10px 0;
                    padding-left: 20px;
                    &:hover {
                      color: ${colors.blue};
                    }
                  }
                }
              }
            }
          }
          &:first-child {
            .accordion-header {
              border-top: 1px solid ${colors.border1};
            }
          }
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  .mb-sidebar.visible {
    left: 0 !important;
  }

  .mb-sidebar-overlay {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: none;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease;

    @media (max-width: 767px) {
      display: block;
    }
  }

  .mb-sidebar-overlay.active {
    visibility: visible;
    opacity: 1;
  }
`;
