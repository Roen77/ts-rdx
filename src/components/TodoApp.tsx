// TodoApp.tsx
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { addTodo, removeTodo, toggleTodo } from "../modules/todos";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [value, setValue] = useState("");
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  const renderList = (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할일 입력"
          onChange={onChange}
          value={value}
        ></input>
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.length === 0 ? <p>등록되 할일이 없습니다</p> : renderList}
      </div>
    </div>
  );
}

export default TodoApp;
