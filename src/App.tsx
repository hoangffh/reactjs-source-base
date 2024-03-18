import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./screen/container/page";
import Authentication from "./components/Authentication/page";
import Root from "./routes/Root";
import NotFoundScreen from "./screen/404/NotFoundScreen";
import LoginScreen from "./screen/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/test"} element={<Test />} />
          <Route path={"/login"} element={<LoginScreen />} />
          <Route element={<Authentication />}>
            <Route path="/*" element={<Root />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
