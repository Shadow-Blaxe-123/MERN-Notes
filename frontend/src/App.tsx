// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/notes" element={<Notes />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
