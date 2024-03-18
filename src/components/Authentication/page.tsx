import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Authentication = () => {
  const gettoken = useSelector((state: RootState) => state.token);

  const { token } = gettoken;

  if (!token) return <Navigate to={"/login"} />;

  return <Outlet />;
};

export default Authentication;
