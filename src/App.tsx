import "./App.css";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import typeScriptLogo from "./assets/typeScript.svg";
import SubmitForm from "./components/SubmitForm";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://typescript.dev" target="_blank">
          <img
            src={typeScriptLogo}
            className="logo typeScript"
            alt="TypeScript logo"
          />
        </a>
      </div>
      <h1>Vite + React + Ts</h1>
      <SubmitForm />
    </>
  );
}

export default App;
