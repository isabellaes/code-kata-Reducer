import { useReducer, useRef } from "react";
import "./counter.css";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
  HALVE: "halve",
  ADD10: "add10",
};

type State = {
  count: number;
};

type Action = {
  type: string;
  payload?: number;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD:
      if (action.payload) return { count: state.count + action.payload };
      else return { count: state.count + 1 };
    case ACTION.REMOVE:
      if (action.payload) return { count: state.count - action.payload };
      else {
        return { count: state.count - 1 };
      }
    case ACTION.RESET:
      return { count: (state.count = 0) };
    case ACTION.HALVE:
      return { count: state.count / 2 };
    case ACTION.ADD10:
      if (action.payload) return { count: state.count + action.payload };
      else return { count: state.count + 10 };
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddNumber() {
    if (inputRef.current) {
      dispatch({ type: ACTION.ADD, payload: Number(inputRef.current.value) });
    }
  }

  return (
    <div className="counter-div">
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: ACTION.ADD, payload: 1 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: ACTION.REMOVE, payload: 1 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: ACTION.HALVE })}>Halve</button>
      <button onClick={() => dispatch({ type: ACTION.ADD10, payload: 10 })}>
        Add 10
      </button>

      <input type="number" placeholder="Add number..." ref={inputRef} />
      <button onClick={() => handleAddNumber()}>Add</button>
    </div>
  );
};

export default Counter;
