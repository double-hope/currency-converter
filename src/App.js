import { useState } from 'react';
import { Header, Converter } from './components'
import { InputContext } from './context';

function App() {
  process.env.API_KEY = '2';
  const [targetInput, setTargetInput] = useState(null);
  const inputProvider = {input: targetInput, setTargetInput};

  return (
    <InputContext.Provider value={inputProvider}>
      <Header/>
      <main>
        <Converter />
      </main>
    </InputContext.Provider>
  );
}

export default App;
