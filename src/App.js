import './reset.css';
import './App.css';
import Header from './Components/Header';
import PageTitle from './Components/PageTitle';

function App() {
  return (
    <div className='app'>
      <Header />
      <PageTitle>Selecione o filme</PageTitle>
    </div>
  );
}

export default App;
