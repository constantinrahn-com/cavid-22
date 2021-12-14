import React from 'react';
import headerbackground from './cavid-wedding-main.png';
import secondbackground from './cavid-wedding-second.png';
import gift from './gift.png';
import drinks from './drinks.png';
import food from './food.png';
import party from './party.jpg';
import location from './location.jpg';
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
      <header className="App-header mb-max" style={{backgroundImage: `url(${headerbackground})`}}>
        <h1 className="App-header-title">CAVID-22</h1>
        <p className="App-header-subtitle">30.04.2022 | "VON GREIFSWALD"</p>
        <Countdown
          date={'2022-04-30T14:00:00'}
          renderer={renderer}
        />
      </header>
      <main className="container">
        <section className="picture-section mb-max">
          <img className="picture" src={party} alt="Party hard! Aber nur mit euch!"/>
          <div className="text-background">
            <h2 className="section-title">Party hard!</h2>
            <p className="section-text">Einlass ab	13 Uhr  |  Beginn 14 Uhr<br /><br />
              Einlass gilt erst ab 18 Jahren. Bitte beim Einlass
              das Ticket bereithalten. Getränke und Speisen 
              sind selbstverständlich im Preis inbegriffen.
            </p>
          </div>
        </section>
        <section className="picture-section mb-max reverse">
          <div className="text-background">
            <h2 className="section-title">VON GREIFSWALD</h2>
            <p className="section-text">Lilli-Henoch-Straße 10<br/>
            10405 Berlin<br/><br/>
            <a href="https://goo.gl/maps/AJ3czr7pQxbU8Pki7" className="link">Hier ein Link zu Google Maps</a><br/>
            <a href="mailto:reservations.berlin@leonardo-hotels.com" className="link">Reserviere hier ein Hotelzimmer</a>
            </p>
          </div>
          <img className="picture" src={location} alt="VON GREIFSWALD"/>
        </section>
        <section className="benefits mb-max">
          <div className="benefit">
            <div className="benefit__picture">
              <img className="benefit__gift" src={gift} alt="Ihr seid das beste Geschenk!"/>
            </div>
            <div className="benefit__description">
              <h3 className="benefit__title">Geschenke</h3>
              <p className="benefit__text">Eine Unterstützung des Brautpaares in Form von Scheinen für die Flitterwochen ist sehr gern gesehen. Keine Blumen! Danke.</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__picture">
              <img className="benefit__drinks" src={drinks} alt="Ihr seid das beste Geschenk!"/>
            </div>
            <div className="benefit__description">
              <h3 className="benefit__title">Getränke</h3>
              <p className="benefit__text">Getränke gibt es in Hülle und Fülle. Wir haben für alles vorgesorgt und es wir niemand durstig nach Hause gehen.</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__picture">
              <img className="benefit__food" src={food} alt="Ihr seid das beste Geschenk!"/>
            </div>
            <div className="benefit__description">
              <h3 className="benefit__title">Essen</h3>
              <p className="benefit__text">Wir werden alle Dinge bestmöglich berücksichtigen und mit der Küche abstimmen. Bitte gib uns zeitnah alle wichtigen Informationen dazu.</p>
            </div>
          </div>
        </section>
        <img src={secondbackground} alt="Bis bald!" className="end-picture mb-max"/>
      </main>
    </div>
  );
}

export default App;
