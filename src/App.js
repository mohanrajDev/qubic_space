import "./App.scss";
import Layouts from "./componens/Layouts";
import { BrowserRouter } from "react-router-dom";
import { DBConfig } from './dbconfig';
import { initDB } from 'react-indexed-db';

initDB(DBConfig);

function App() {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
}

export default App;
