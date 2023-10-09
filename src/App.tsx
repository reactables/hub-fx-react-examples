import { Reducer } from '@hub-fx/core';
import { useHub } from './Hooks/useHub';
import { useObservable } from './Hooks/useObservable';
import './App.css';

const reducer: Reducer<number> = (state = 0) => state;

function App({ hub = useHub() }) {
  const state = useObservable(hub.store({ reducer }));
  return (
    <div className="App">
      <h1>{state}</h1>
    </div>
  );
}

export default App;
