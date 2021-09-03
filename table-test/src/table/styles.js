import styled from "styled-components";

export const TableContainer = styled.div`
  background: #ffffff;
  min-height: 60vh;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.5px solid #e8e8e8;

  thead {
    background: #2528AA;
    height: 46px;
    th {
      height: 46px;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #ffffff;
      vertical-align: middle !important;
      white-space: nowrap;

      :first-child {
        padding-left: 26.5px;
        border-radius: 15px 0px 0px 15px;
      }
      :last-child {
        padding-right: 34.5px;
        border-radius: 0px 15px 15px 0px;
      }

      border: none;
    }
  }

  tbody {
    tr {
      :not(:last-child) {
        border-bottom: 1px solid #e9e9e9;
        margin-left: 10px;
      }
      &:hover {
        background: #f9f9f9;
        border-radius: 15px !important;
        height: 65px;
      }
    }
    td {
      height: 68.67px;
      font-weight: normal;
      font-size: 13.3px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: #353542;
      vertical-align: middle !important;
      white-space: nowrap;

      :first-child {
        padding-left: 26.5px;
        border-radius: 15px 0px 0px 15px;
      }
      :last-child {
        padding-right: 34.5px;
        border-radius: 0px 15px 15px 0px;
      }
      border: none;
    }
  }

  @media screen and (max-width: 550px) {
    border: none !important;
    padding: 0;
    th {
      border: none !important;
      background: #f2f3f4;
      :first-child {
        border-radius: 10px 0 0 10px;
      }
      :last-child {
        border-radius: 0 10px 10px 0;
      }
    }
    tbody {
      td {
        border: none !important;
      }
    }
  }
`;
