// modules/counter.ts
// ducks패턴 즉 액션타입 ,액션생성함수, 리듀서를 모두 한파일에 작성하겠다라는 의미이다.

import { createAction, ActionType, createReducer } from "typesafe-actions";

// 1. 액션 생성함수 선언
// modules/counter.ts
export const increase = createAction("counter/INCREASE")();
export const decrease = createAction("counter/DECREASE")();
// 제너릭타입으로 <payload,meta> 이 값을 지정해줄 수 있다. payload로 number가 온다는 말
export const increaseBy = createAction("counter/INCREASE_BY")<number>();

// action 타입 생성해주기
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// 2.state 선언(초기상태 선언)
// state 타입 정의
type CounterState = {
  count: number;
};
// state 초기 선언
const initialState: CounterState = {
  count: 0,
};

// 리듀서 생성
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));
// 리듀서 함수 내보내주기
export default counter;

// // 위에 typesafe-actions을 사용한 액션 타입 함수는 아래와 같다.
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";
// const INCREASE_BY = "counter/INCREASE_BY";
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (payload) => ({ type: INCREASE_BY, payload });
