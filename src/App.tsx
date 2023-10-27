// importing components from react-router-dom package
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Education from "./components/Education";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
