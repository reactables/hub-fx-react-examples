import { Reducer, Action } from '@hub-fx/core';
import { useHub } from './Hooks/useHub';
import { useObservable } from './Hooks/useObservable';

// Actions
const INCREMENT = 'INCREMENT';
const increment = (): Action => ({ type: INCREMENT });

const RESET = 'RESET';
const reset = (): Action => ({ type: RESET });

// Reducer function to handle state updates
const reducer: Reducer<{ count: number }> = (state = { count: 0 }, action) => {
  switch (action?.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

function Counter() {
  // Initialize a hub;
  const hub = useHub();

  // Bind React state to store observable
  const state = useObservable(hub.store({ reducer }));

  return (
    <>
      <h1>Counter Example</h1>
      <div>
        Count: {state?.count}
        <br />
        <br />
        <button type="button" onClick={() => hub.dispatch(increment())}>
          Increment
        </button>
        <br />
        <br />
        <button type="button" onClick={() => hub.dispatch(reset())}>
          Reset Counter
        </button>
      </div>
    </>
  );
}

export default Counter;
