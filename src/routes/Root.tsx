import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../screen/home/DashboardScreen";
import NotFoundScreen from "../screen/404/NotFoundScreen";

const Root = () => {
  return (
    <Routes>
      <Route>
        {/* change password */}
        <Route path={"/home"} element={<DashboardScreen />} />

        {/* not found */}
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
};

export default Root;
