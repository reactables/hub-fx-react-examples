import { HubFactory, Reducer } from '@hub-fx/core';
import { useStore } from './Hooks/useStore';
import './App.css';

const reducer: Reducer<number> = (state = 0) => state;

function App() {
  const state = useStore(HubFactory(), { reducer });
  return (
    <div className="App">
      <h1>{state}</h1>
    </div>
  );
}

export default App;
