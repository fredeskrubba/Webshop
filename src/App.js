import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import {ReactComponent as maps} from "./components/img/maps.svg";
import {ReactComponent as Logo} from "./components/img/logo.svg";
import "./components/scss/style.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import payments from "./components/img/payments.png";
import Home from "./components/pages/home";
import Account from "./components/pages/account";
import Maps from "./components/Maps";
import {useRef, useEffect, useState} from "react";

function App() {
  
  
  const [items, setItems] = useState([])
  useEffect(
    ()=>{
      fetch("https://my-webshop-api.herokuapp.com/navIcons")
      .then(response => {
        return response.json()
      })
      .then(data =>{
        setItems(data)
      })
    }
  ,[])

  const [payments, setPayments] = useState([])
  useEffect(
    ()=>{
      fetch("https://my-webshop-api.herokuapp.com/payments")
      .then(response => {
        return response.json()
      })
      .then(data =>{
        setPayments(data)
      })
    }
  ,[]) 

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

          // the icons prop will be an empty array at the start, so only use it once the state updates.
          icons={items.navButtons !== undefined ? items.navButtons : []}
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
          payments={payments}
        />
      </div>
    </Router>
  );
}
export default App;
