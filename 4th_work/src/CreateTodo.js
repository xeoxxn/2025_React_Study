import React from "react";

function CreateTodo({ todoname, deadline, onChange, onCreate }) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          color: "beige",
        }}
      >
        <input
          style={{
            marginLeft: "5px",
            border: "solid 0.1rem beige",
            backgroundColor: "beige",
            borderRadius: "5px",
          }}
          name="todoname"
          placeholder="할 일을 입력하세요"
          onChange={onChange}
          value={todoname}
        />
        <input
          style={{
            marginLeft: "5px",
            border: "solid 0.1rem beige",
            backgroundColor: "beige",
            borderRadius: "5px",
          }}
          name="deadline"
          placeholder="마감기한"
          onChange={onChange}
          value={deadline}
        />
      </div>
      <button
        style={{
          marginLeft: "5px",
          border: "solid 0.1rem beige",
          backgroundColor: "beige",
          borderRadius: "5px",
        }}
        onClick={onCreate}
      >
        등록
      </button>
    </div>
  );
}

export default CreateTodo;
