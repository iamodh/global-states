import "../styles/style.css";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | null
>(null);

export default function MyApp() {
  const [theme, setTheme] = useState("light"); // 최상위 컴포넌트에서 theme state를 관리

  return (
    <ThemeContext value={[theme, setTheme]}>
      <Form />
    </ThemeContext>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Change Theme</Button>
    </Panel>
  );
}

interface IPanel {
  title: string;
  children: React.ReactNode;
}

function Panel({ title, children }: IPanel) {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const [theme] = themeContext; // theme state 이용
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

interface IButton {
  children: React.ReactNode;
}

function Button({ children }: IButton) {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const [theme, setTheme] = themeContext; // theme state와 state setter 이용

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const className = "button-" + theme;
  return (
    <button className={className} onClick={toggleTheme}>
      {children}
    </button>
  );
}
