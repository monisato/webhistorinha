import './App.css';
import '../src/styles/Animations.css';
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
        <div className="MicContainer">
          <div className="MicGroupParts">
            <img src='./imgs/mic_capa_mic.png' className="Microondas" alt="microondas" />
            <img src='./imgs/mic_capa_mic_bra_esq.png' className="MicBraEsq" alt="microondas" />
            <img src='./imgs/mic_capa_mic_olho.png' className="MicOlho" alt="microondas" />
          </div>
        </div>
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
