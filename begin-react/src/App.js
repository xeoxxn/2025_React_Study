import React, { useRef, useState } from "react";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #73a26e;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  height: 100%;
  width: 100%;
`;

function App() {
  const [inputs, setInputs] = useState({
    todoname: "",
    deadline: "",
  });
  const { todoname, deadline } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [todos, setTodos] = useState([
    {
      id: 1,
      todoname: "공부하기",
      deadline: "2024-05-07",
      done: true,
    },
    {
      id: 2,
      todoname: "잠자기",
      deadline: "2024-03-10",
      done: false,
    },
    {
      id: 3,
      todoname: "수업듣기",
      deadline: "2023-02-22",
      done: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const todo = {
      id: nextId.current,
      todoname,
      deadline,
    };
    setTodos([...todos, todo]);

    setInputs({
      todoname: "",
      deadline: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
  };
  return (
    <Container>
      <TodoContainer>
        <h1>⭐ Todo List ⭐</h1>
        <CreateTodo
          todoname={todoname}
          deadline={deadline}
          onChange={onChange}
          onCreate={onCreate}
        />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoContainer>
    </Container>
  );
}

export default App;
