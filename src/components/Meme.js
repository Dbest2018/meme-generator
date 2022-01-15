import React, { useState } from "react";
import styled from "styled-components";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };
  return (
    <MemeContainer>
      <MemeForm>
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button>Get a new meme image</button>
      </MemeForm>
      <MemeImage>
        <img src={meme.randomImage} alt="meme" />
        <h2 className="top">{meme.topText}</h2>
        <h2 className="bottom">{meme.bottomText}</h2>
      </MemeImage>
    </MemeContainer>
  );
};

export default Meme;

const MemeContainer = styled.div`
  padding: 36px;

  > img {
    height: 100%;
    width: 100%;
    margin-top: 20px;
  }
`;

const MemeForm = styled.div`
  display: grid;
  grid-template: 40px 40px / 1fr 1fr;
  gap: 17px;

  > input {
    border: 1px solid #d5d4d8;
    text-indent: 5px;
    border-radius: 5px;
  }

  > button {
    grid-column: 1 / -1;
    background: linear-gradient(
      90deg,
      var(--main-purple) 1.18%,
      var(--light-purple) 100%
    );
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
`;

const MemeImage = styled.div`
  margin-top: 10px;
  position: relative;

  > img {
    width: 100%;
  }

  .top {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    color: white;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: white;
  }
`;
