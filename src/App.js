import './App.css';
import Part01 from './components/Part01';
import Part02 from './components/Part02';
import Part03 from './components/Part03';
import Part04 from './components/Part04';
import Part05 from './components/Part05';
import Part06 from './components/Part06';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./imgs/pg01.jpeg' className="Capa" alt="Capa" />
        <p>
          Role a página para baixo para ler a historinha.
        </p>
      </header>
      <main className="Parts">
        <Part01/>
        <Part02/>
        <Part03/>
        <Part04/>
        <Part05/>
        <Part06/>
      </main>
    </div>
  );
}

export default App;
