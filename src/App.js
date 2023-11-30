import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Intro from "./pages/Intro";
import Add from "./pages/diary/Add";
import Edit from "./pages/diary/Edit";
import DiaryIndex from "./pages/diary/Index";
import "./styles/App.css";

function App() {
  return (
    <div className="layout">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Index />}></Route>
          <Route path="/diary" element={<DiaryIndex />}></Route>
          <Route path="/diary/add" element={<Add />}></Route>
          <Route path="/diary/edit/:pk" element={<Edit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
