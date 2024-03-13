import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);

  console.log(count);

  const dispatch = useDispatch();
  return (
    <div className="App">
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

export default App;
