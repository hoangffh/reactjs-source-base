import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import { setToken } from "../../features/authentication/authen";

function DashboardScreen() {
  const count = useSelector((state: RootState) => state.counter.value);

  const token = useSelector((state: RootState) => state.token.token);

  console.log(token);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="block mx-auto">This is a Dashboard</div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default DashboardScreen;
