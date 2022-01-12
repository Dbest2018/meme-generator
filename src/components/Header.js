import React from "react";
import styled from "styled-components";

import image from "../images/troll_face.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={image} alt="troll-face" />
      <h2>Meme generator</h2>
      <p>React course- project three</p>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);

  > img {
    height: 100%;
    padding: 4px;
  }
`;
