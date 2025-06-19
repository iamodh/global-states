import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../libs/redux/store";
import type { RootState } from "../libs/redux/store/store";

export default function CounterButtonContainer() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <button
        onClick={() => {
          dispatch(counterActions.increase());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(counterActions.decrease());
        }}
      >
        -
      </button>

      <div>
        <text>개수: {count}개</text>
      </div>
    </>
  );
}
