import { Routes, Route } from "react-router-dom";

import { Main } from "./pages/index.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </>
  );
}
