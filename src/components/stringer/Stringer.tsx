import { useReducer } from "react";
import "./stringer.css";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
};

type State = {
  p: string;
};

type Action = {
  type: string;
  payload?: string;
};

const stringReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD:
      return { p: state.p + action.payload };
    case ACTION.REMOVE:
      return { p: state.p.slice(0, -1) };
    case ACTION.RESET:
      return { p: "" };
    default:
      return state;
  }
};

const Stringer = () => {
  const [state, dispatch] = useReducer(stringReducer, { p: "" });

  return (
    <div className="stringer">
      <p>Text: {state?.p}</p>
      <button onClick={() => dispatch({ type: ACTION.ADD, payload: "r" })}>
        Add R
      </button>
      <button onClick={() => dispatch({ type: ACTION.ADD, payload: "xyz" })}>
        Add XYZ
      </button>
      <button onClick={() => dispatch({ type: ACTION.REMOVE })}>Remove</button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
      <input
        type="text"
        maxLength={1}
        placeholder="Add char"
        onChange={(e) =>
          dispatch({ type: ACTION.ADD, payload: e.currentTarget.value })
        }
      />
    </div>
  );
};

export default Stringer;
