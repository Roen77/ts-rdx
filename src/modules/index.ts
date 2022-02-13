// modules/index.ts
import todos from "./todos/reducer";
import github from "./github/reducer";
// root 리듀서 생성
import { combineReducers } from "redux";
import counter from "./counter";
import { githubSaga } from "./github";
import { all } from "redux-saga/effects";
const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;

// 루트 리듀서의 반환값을 유추할수있도록 내보내주기
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}
