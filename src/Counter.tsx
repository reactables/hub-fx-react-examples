import { RxCounter } from '@hub-fx/examples';
import { useReactable } from '@hub-fx/react-helpers';

// See for implementation and tests:
// https://github.com/hub-fx/hub-fx/tree/main/packages/examples/src/Counter

function Counter() {
  const {
    state,
    actions: { increment, reset },
  } = useReactable(RxCounter());

  return (
    <>
      <h1>Counter Example</h1>
      <div>
        Count: {state?.count}
        <br />
        <br />
        <button type="button" onClick={increment}>
          Increment
        </button>
        <br />
        <br />
        <button type="button" onClick={reset}>
          Reset Counter
        </button>
      </div>
    </>
  );
}

export default Counter;
