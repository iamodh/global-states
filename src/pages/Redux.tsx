import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../libs/redux/store";
import type { RootState } from "../libs/redux/store/store";

export default function CounterButtonContainer() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <section>
        <button
          onClick={() => {
            dispatch(counterActions.increase(5));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(counterActions.decrease(5));
          }}
        >
          -
        </button>

        <div>
          <text>개수: {count}개</text>
        </div>
      </section>
      <hr />
      <section>
        <a
          target="_blank"
          href="https://velog.io/@iamodh/%EC%84%B8%EC%83%81%EC%97%90%EC%84%9C-%EA%B0%80%EC%9E%A5-%EC%89%AC%EC%9A%B4-%EB%A6%AC%EB%8D%95%EC%8A%A4-%EC%82%AC%EC%9A%A9%EB%B2%95"
        >
          동작 원리를 정리한 블로그 포스팅
        </a>
      </section>
    </div>
  );
}
