import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [todos, setTodos] = useState([]);

  const [selectTodo, setSelectTodo] = useState(null);
  const watchTodo = (todo) => {
    //선택된 투두 아이템을 상세정보로 보여줄 예정
    setSelectTodo(todo);
  };
  useEffect(() => {
    //const watchTodos = () => {
    axios
      .get('http://localhost:5000/api/todos')
      .then((res) => setTodos(res.data))
      .catch((error) => console.error('모두 불러오기 실패 에러입니다.', error));
  }, []);

  return (
    <>
      <h1>할일 리스트</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.ID}>
            {todo.TASK}
            <button onClick={() => watchTodo(todo)}>상세보기</button>
          </li>
        ))}
      </ul>
      {selectTodo && (
        <div>
          <h2>상세 정보</h2>
          <p> Id : {selectTodo.ID}</p>
          <p>Task : {selectTodo.TASK}</p>
        </div>
      )}
    </>
  );
}
