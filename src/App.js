import React from 'react';
import headerbackground from './cavid-wedding-main.png';
import Countdown from 'react-countdown';
import './App.css';

function App() {
  const renderer = ({ hours, minutes, days }) => {
    return (
      <section className="App-countdown">
          <div>
            <p className="App-time-text">Tage</p>
            <h3 className="App-time">{days}</h3>
          </div>
          <div>
            <p className="App-time-text">Stunden</p>
            <h3 className="App-time">{hours}</h3>
          </div>
          <div>
            <p className="App-time-text">Minuten</p>
            <h3 className="App-time">{minutes}</h3>
          </div>
        </section>
    );
  };
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url(${headerbackground})`}}>
        <h1 className="App-header-title">CAVID-22</h1>
        <p className="App-header-subtitle">30.04.2022 | "VON GREIFSWALD"</p>
        <Countdown
          date={'2022-04-30T13:00:00'}
          renderer={renderer}
        />
      </header>
      <main>
        <section className="picture-section">
          <picture></picture>
          
        </section>
      </main>
    </div>
  );
}

export default App;
