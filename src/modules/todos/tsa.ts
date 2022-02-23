// 1. 액션 생성함수 선언

import { ActionType, createReducer } from "typesafe-actions";
import { createAction } from "typesafe-actions";

// modules/counter.ts
export const increase = createAction("counter/INCREASE")();
export const decrease = createAction("counter/DECREASE")();
// 제너릭타입으로 <payload,meta> 이 값을 지정해줄 수 있다. payload로 number가 온다는 말
export const increaseBy = createAction("counter/INCREASE_BY")<number>();

// action 타입 생성해주기
const actions = { increase, decrease, increaseBy };
export type CounterAction = ActionType<typeof actions>;

// 2.state 선언(초기상태 선언)
// state 타입 정의
export type CounterState = {
  count: number;
};
// state 초기 선언
export const initialState3: CounterState = {
  count: 0,
};

// 리듀서 생성
const counter = createReducer<CounterState, CounterAction>(initialState3)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));
