// App.js
import React, { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";
import Memo from "./components/Memo";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
    background-color: #599468;
    font-family: sans-serif;
}`;

const AppBlock = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: beige;
  &:hover {
    border-color: green;
  }
  &:focus {
    outline: none;
    border-color: green;
  }
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  resize: none;
  background-color: beige;
  &:hover {
    border-color: green;
  }
  &:focus {
    outline: none;
    border-color: green;
  }
`;

const Button = styled.button`
  background: #325928;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: rgb(78, 187, 62);
  }
`;

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [memos, setMemos] = useState([]);

  const handleAddMemo = () => {
    if (!title.trim() || !content.trim()) return;
    setMemos([...memos, { title, content }]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <GlobalStyle />
      <AppBlock>
        <h1>- 메모장 -</h1>
        <InputGroup>
          <Input
            type="text"
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            rows="4"
            placeholder="내용 입력"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button onClick={handleAddMemo}>메모 추가</Button>
        </InputGroup>

        {memos.map((memo, index) => (
          <Memo key={index} title={memo.title} content={memo.content} />
        ))}
      </AppBlock>
    </>
  );
}

export default App;
