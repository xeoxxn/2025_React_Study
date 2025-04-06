import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const CardIntro = styled.div`
  &:hover {
    transform: translateY(-10px);
    transition-duration: 0.5s;
  }
  transition-duration: 0.5s;
`;
const Intro = styled.div`
  background-color: black;
  color: white;
  border: 1.5px solid gray;
  border-radius: 10px;
  width: 150px;
  height: 250px;
  padding: 12px;
`;
const Button = styled.button`
  border: 0.5px solid gray;
  border-radius: 5px;
  background-color: black;
  color: white;
`;
function Card({ name, age, hobby }) {
  const [food, setFood] = useState("");
  const [isChange, setChange] = useState(false);
  const onClick = () => {
    setChange(!isChange);
  };
  const onChange = (e) => {
    setFood(e.target.value);
  };
  return (
    <Container>
      <h1>자기소개 카드</h1>
      <CardIntro>
        <Intro>
          이름 : {name}
          <p />
          나이 : {age}
          <p />
          취미 : {hobby}
          <p />
          <span>
            좋아하는 음식 : <br />
            {isChange ? (
              <input
                style={{ width: "80%" }}
                onChange={onChange}
                placeholder="뭐 먹을래"
              />
            ) : (
              food
            )}
          </span>
          <p />
          <Button onClick={onClick}>변경</Button>
        </Intro>
      </CardIntro>
    </Container>
  );
}
export default Card;
