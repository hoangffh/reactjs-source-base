import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./screen/container/page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Test />} />
          {/* <Route element={<Authentication />}>
              <Route path="/*" element={<Root />} />
            </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
