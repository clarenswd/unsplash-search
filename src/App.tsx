import "./App.css";
import { useRecoilValue } from "recoil";
import useUnsplash from "./hooks/useUnsplash";

function App() {
  useUnsplash();
  return (
    <div className="container-fluid">
      <div className="container"></div>
    </div>
  );
}

export default App;
