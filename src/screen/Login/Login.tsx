import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../features/authentication/authen";

function LoginScreen() {
  const token = useSelector((state: RootState) => state.token.token);

  console.log(token);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="block mx-auto">Login Screeen</div>
      <button aria-label="Login" onClick={() => dispatch(setToken("hoangtn"))}>
        Auto Login
      </button>
      <span className="block">{token}</span>
    </div>
  );
}

export default LoginScreen;
