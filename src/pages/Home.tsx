export default function Home() {
  return (
    <div>
      <h1>상태관리 라이브러리 비교하기</h1>
      <p>
        상태관리 라이브러리 사용법을 익히고, 장단점에 대해 탐구해보기 위한
        테스트 프로젝트입니다.
      </p>
      <hr />
      <h2>버전 정보</h2>
      <details>
        <summary>확인하기</summary>
        <ul>
          <li>1.0.0 - 1차 배포</li>
          <li>0.2.1 - 코드 확인하기 기능 추가</li>
          <li>0.2.0 - zustand 페이지 추가</li>
          <li>
            0.1.0 - recoil 페이지 추가 (React 19버전과 호환성 문제로 동작 안 함)
          </li>
        </ul>
      </details>
    </div>
  );
}
