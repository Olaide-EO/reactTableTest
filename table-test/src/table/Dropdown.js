import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
import styled, { keyframes } from "styled-components";
import {MenuSvg} from "./Icons";

/**
 * 
 * @param {row} 
 * used to access row data from the dropdown 
 */
const ProductEditMenu = ({ row }) => {
  const [menu, setMenu] = useState(false);

  return (
    <Popover
      isOpen={menu}
      positions={["left", "bottom"]}
      reposition={true}
      align="start"
      onClickOutside={() => setMenu(!menu)}
      content={
        <MenuContainer>
          <div>Test Table</div>
          <div>Copy Text</div>
          <div>Testing Table</div>
          <div>Great Table</div>
        </MenuContainer>
      }
    >
      <div
        className="btn waves-effect"
        onClick={() => setMenu(!menu)}
      >
        <MenuSvg />
      </div>
    </Popover>
  );
};

const DropDownSlide = keyframes`
  100% 
  { -webkit-transform: translateY(0);
      transform: translateY(0); 
  }
  0% {
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
  }
`;

const MenuContainer = styled.div`
  min-width: 132.86px;
  width: auto;
  animation-name: ${DropDownSlide};
  animation-duration: 0.3s;
  min-height: 145px;
  padding: 10px 0px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
  border-radius: 10px;

  & :hover {
    background: rgb(196, 196, 196, 0.2);
    border-radius: 10px;
  }

  & > * {
    margin: 5px 0px;
    font-size: 12px;
    color: #353542;
    line-height: 31px;
    padding-left: 21.34px;
    padding-right: 21px;
    cursor: pointer;
  }
`;

export default ProductEditMenu;
