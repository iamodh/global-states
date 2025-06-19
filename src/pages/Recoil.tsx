// import { useRecoilState } from "recoil";
// import { textState } from "../libs/recoil/atom";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Recoil() {
  // const [text, setText] = useRecoilState(textState);

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(event.target.value);
  // };

  return (
    <div>
      {/* <section>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </section> */}
      <p>
        Cannot destructure property 'ReactCurrentDispatcher' of
        'import_react.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
        as it is undefined.
      </p>
      <p>
        React 19와 Recoil의 호환성 문제로 위의 에러가 발생합니다. (
        <a
          target="_blank"
          href="https://www.inflearn.com/en/community/questions/1508344/react-19%EB%B2%84%EC%A0%84%EC%97%90%EC%84%9C%EB%8A%94-recoil%EC%82%AC%EC%9A%A9%EC%9D%B4-%EC%96%B4%EB%A0%B5%EB%82%98%EC%9A%94?srsltid=AfmBOopSYV8caPX9FaDMWc1YnDfVV8TRJwufgFIOFHuZ3ZOXowFsn4a-"
        >
          관련 토론 확인하기 ↗︎
        </a>
        )
      </p>
      <hr />
      <section>
        <details>
          <summary>코드 확인하기</summary>
          <pre>
            <strong>src/libs/recoil/atom.ts</strong>
            <SyntaxHighlighter language={"tsx"}>
              {`
import { atom } from "recoil";

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
              `}
            </SyntaxHighlighter>
            <strong>src/pages/Recoil.tsx</strong>
            <SyntaxHighlighter language={"tsx"}>
              {`
import { useRecoilState } from "recoil";
import { textState } from "../libs/recoil/atom";

export default function Recoil() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <section>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </section>
    </div>
  );
}
`}
            </SyntaxHighlighter>
          </pre>
        </details>
      </section>
    </div>
  );
}
