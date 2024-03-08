import { useReducer } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
};

const stringReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.ADD:
      return { p: state.p + "r" };
    case ACTION.REMOVE:
      const newString = state.p;
      console.log(newString);
      return state;
    default:
      return state;
  }
};

const Stringer = () => {
  const [state, dispatch] = useReducer(stringReducer, { p: "" });

  return (
    <div className="stringer">
      <p>Text: {state?.p}</p>
      <button onClick={() => dispatch({ type: ACTION.ADD })}>Add R</button>
      <button onClick={() => dispatch({ type: ACTION.REMOVE })}>
        Remove R
      </button>
    </div>
  );
};

export default Stringer;
