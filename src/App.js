import "./App.scss";
import Layouts from "./componens/Layouts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
}

export default App;
