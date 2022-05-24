import Navbar from "./components/Navbar";
import {ReactComponent as maps} from "./components/img/maps.svg";
import {ReactComponent as account} from "./components/img/account.svg";
import {ReactComponent as heart} from "./components/img/heart.svg";
import {ReactComponent as facebook} from "./components/img/facebook.svg";
import {ReactComponent as youtube} from "./components/img/youtube.svg";
import {ReactComponent as insta} from "./components/img/insta.svg";
import FormSection from "./components/FormSection";
import Footer from "./components/footer/Footer";
import payments from "./components/img/payments.png";
import Home from "./components/pages/home";
import Account from "./components/pages/account";
import Maps from "./components/pages/maps";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import "./components/scss/style.css";

function App() {
  const socials = [
    {
      id: 1,
      svg:facebook,
    }, 
    {
      id: 2,
      svg:youtube,
    },
    {
      id: 3,
      svg:insta,
    },
  ];
  const inputs = [
    {
      id: 1,
      placeholder: "Navn",
      type: "text",
    },
    {
      id: 2,
      placeholder: "Email",
      type: "text",
    },
  ]

  const navButtons = [
    {
      id: 1,
      svg: maps,
      text: "Find Butik",
      route: "maps",
    },
    {
      id: 2,
      svg: heart,
      text: "Ønskeliste",
      route: "wishlist"
    },
    {
      id: 3,
      svg: account,
      text: "Profil",
      route: "account",
    },
  ]
  
  return (
    <Router>
      <div className="App">
        <Navbar
          logo="Fredes Webshop"
          icons={navButtons}
        />
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/account" element={<Account/>}>

          </Route>
          <Route path="/maps" element={<Maps/>}>

          </Route>
        </Routes>
        <FormSection 
          description="Tilmeld dig vores nyhedsbrev, og gå aldrig glip af et godt tilbud"
          socials={socials}
          inputs={inputs}
          buttonText="Tilmeld"
        />
        <Footer 
          weekdays="9:30-16:00"
          saturdays="10:00-15:00"
          sundays="Lukket"
          payments={payments}
          copyright="@Frederik Skrubbeltrang - 2022"
        />
      </div>
    </Router>
  );
}
export default App;
