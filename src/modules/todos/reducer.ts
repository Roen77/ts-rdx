// modules/todos/reducer.ts
import { createReducer } from "typesafe-actions";
import { addTodo, removeTodo, TodosState, toggleTodo } from "../todos";
import { TodosAction } from "./types";

// 초기 state 선언
const initialState: TodosState = [];
const reducer = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(removeTodo, (state, action) =>
    state.filter((todo) => todo.id !== action.payload)
  )
  .handleAction(toggleTodo, (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : { ...todo }
    )
  )
  .handleAction(addTodo, (state, action) =>
    state.concat({ ...action.payload })
  );
export default reducer;
