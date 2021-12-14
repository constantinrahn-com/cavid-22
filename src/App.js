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
  const [openModal, setOpenModal] = React.useState(false);
  const clickToOpenModal = () => {
    setOpenModal(!openModal);
    console.log(openModal)
  }
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
      {openModal && (
        <dialog className="dialog">
          <main className="dialog-background">
            <button onClick={clickToOpenModal} className="button-close">x</button>
            <h2>Impressum</h2>
            <br/>
            <p><b>Angaben gem. § 5 TMG:</b></p>
            <br/>
            <p>
              Constantin Rahn <br/>
              Wilhelmstraße 10 <br/>
              31582 Nienburg/Weser
            </p>
            <br/>
            <p><b>Kontaktaufnahme:</b></p>
            <p>post (at) constantinrahn.com</p>
            <br/>
            <p><b>Haftungsausschluss – Disclaimer:</b></p>
            <p>Haftung für Inhalte</p>
            <p>Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.</p><br/>
            <p>Haftungsbeschränkung für externe Links</p>
            <p>Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich. Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes „Cavid-22“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern, Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist. Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.</p><br/>
            <p><b>Urheberrecht</b></p>
            <p>Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf) . Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf ). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen. Dieses Impressum wurde freundlicherweise von jurarat.de zur Verfügung gestellt.</p>
          </main>
        </dialog>
      )}
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
      <footer className="footer">
        <button className="footer__link" onClick={clickToOpenModal}>
          Impressum
        </button>
      </footer>
    </div>
  );
}

export default App;
