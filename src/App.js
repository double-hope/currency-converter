import { Header, Converter } from './components'


function App() {

  return (
    <>
      <Header/>
      <Converter from={'UAH'} to={'USD'} amount={3}></Converter>
    </>
  );
}

export default App;
