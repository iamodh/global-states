import SyntaxHighlighter from "react-syntax-highlighter";
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
      <section>
        <button onClick={onClick}>Increase Bears</button>
        <button onClick={onReset}>Reset</button>
        <br />
        number: {bears}
        <br />
        {"🐻".repeat(bears)}
      </section>
      <hr />
      <section>
        <details>
          <summary>코드 확인하기</summary>
          <pre>
            <strong>src/libs/zustand/store.ts</strong>
            <SyntaxHighlighter language={"tsx"}>
              {`
import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
  reset: () => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  reset: () => set(() => ({ bears: 0 })),
}));
              `}
            </SyntaxHighlighter>
            <strong>src/pages/Zustand.tsx</strong>
            <SyntaxHighlighter language={"tsx"}>
              {`import { useBearStore } from "../zustand/store";

export default function Zustand() {
  const { bears, increase, reset } = useBearStore();

  const onClick = () => increase(1);
  const onReset = () => reset();

  return (
    <section>
      <button onClick={onClick}>Increase Bears</button>
      <button onClick={onReset}>Reset</button>
      <br />
      number: {bears}
      <br />
      {"🐻".repeat(bears)}
    </section>
  );
}`}
            </SyntaxHighlighter>
          </pre>
        </details>
      </section>
    </div>
  );
}
