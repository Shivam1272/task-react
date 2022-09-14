import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Task2 from "./Components/Task2";
import HomeScreen from "./Components/HomeScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="shivam1272.github.io/task-react/" element={<Task2 />}  />
          <Route path="shivam1272.github.io/task-react//home" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
