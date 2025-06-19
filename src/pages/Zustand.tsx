import { useBearStore } from "../libs/zustand/store";

export default function Zustand() {
  const { bears, increase, reset } = useBearStore();

  const onClick = () => {
    increase(1);
  };

  const onReset = () => {
    reset();
  };

  return (
    <div>
      <button onClick={onClick}>Increase Bears</button>
      <button onClick={onReset}>Reset</button>
      <br />
      number: {bears}
      <br />
      {"🐻".repeat(bears)}
    </div>
  );
}
