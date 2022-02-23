import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { decrease, increase, increaseBy } from "../modules/counter";
import { asyncGetRegion, asyncGetRegionArea } from "../modules/Region/actions";

function Counter() {
  // 상태 조회
  const count: number = useSelector((state: RootState) => state.counter.count);
  const region = useSelector((state: RootState) => state.regionReducer);
  const regionArea = useSelector(
    (state: RootState) => state.regionAreaReducer.data.userProfile
  );
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
    dispatch(asyncGetRegion.request(""));
    dispatch(asyncGetRegionArea.request("Roen77"));
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  if (!region) return null;
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
