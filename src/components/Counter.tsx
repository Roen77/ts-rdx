import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { decrease, increase, increaseBy } from "../modules/counter";

function Counter() {
  // 상태 조회
  const count: number = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => onIncrease()}>+1</button>
      <button onClick={() => onDecrease()}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;
