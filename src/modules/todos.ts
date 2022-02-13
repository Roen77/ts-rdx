// modules/todos.ts
import { ActionType, createAction, createReducer } from "typesafe-actions";

// 1.액션 생성 함수 및 액션 타입 정하기
let nextId = 1;
// payload 타입을 Todo로 지정해주고 payload값을 객체형식으로 적어줌
export const addTodo = createAction("todos/ADD_TODO", (text: string) => ({
  id: nextId++,
  text: text,
  done: false,
}))<Todo>();
export const toggleTodo = createAction("todos/TOGGLE_TODO")<number>();
export const removeTodo = createAction("todos/REMOVE_TODO")<number>();

// 액션 타입 정하기
const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;

// 2.state 타입 및 state 초기화
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export type TodosState = Todo[];

// 초기 상태 선언
const initialState: TodosState = [];

// 3. 리듀서 작성
const todos = createReducer<TodosState, TodosAction>(initialState)
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

export default todos;
