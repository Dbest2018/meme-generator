import React from "react";
import styled from "styled-components";

import image from "../images/troll_face.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={image} alt="troll-face" />
      <h2>Meme Generator</h2>
      <p>React Course- Project three</p>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  background: linear-gradient(
    90deg,
    var(--main-purple) 1.18%,
    var(--light-purple) 100%
  );
  color: white;
  padding: 20px;

  > img {
    height: 100%;
    margin-right: 6px;
  }
  > h2 {
    font-size: 1.25rem;
    margin-right: auto;
  }
  > p {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
