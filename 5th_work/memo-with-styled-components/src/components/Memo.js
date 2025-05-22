// components/Memo.js
import React from "react";
import { styled } from "styled-components";

const MemoBlock = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border-color: #325928;
  background: #325928;
`;

const MemoTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: beige;
`;

const MemoContent = styled.p`
  margin: 0;
  color: beige;
`;

function Memo({ title, content }) {
  return (
    <MemoBlock>
      <MemoTitle>{title}</MemoTitle>
      <MemoContent>{content}</MemoContent>
    </MemoBlock>
  );
}

export default Memo;
