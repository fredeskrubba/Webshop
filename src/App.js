import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import {ReactComponent as maps} from "./components/img/maps.svg";
import {ReactComponent as account} from "./components/img/account.svg";
import {ReactComponent as heart} from "./components/img/heart.svg";
import {ReactComponent as Logo} from "./components/img/logo.svg";
import "./components/scss/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import payments from "./components/img/payments.png";
import Home from "./components/pages/home";
import Account from "./components/pages/account";
import Maps from "./components/Maps";
import {useRef} from "react";

function App() {
  
  const navButtons = [
    
    {
      id: 0,
      svg: heart,
      text: "Ønskeliste",
      route: "wishlist"
    },
    {
      id: 1,
      svg: account,
      text: "Profil",
      route: "account",
    },
  ]
  
  const modalRef = useRef()
  function toggleMap(map){
    if (map.style.display === "none"){
      map.style.display = "flex"
    } else {
      map.style.display = "none"
    }
  }
  return (
    <Router>
      <div className="App">
        <Navbar
          logo={<Logo/>}
          icons={navButtons}
          map={modalRef}
          toggleMap={toggleMap}
        />
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/account" element={<Account/>}>

          </Route>
        </Routes>
        <Maps ref={modalRef} toggleMap={toggleMap} map={modalRef}/>
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
