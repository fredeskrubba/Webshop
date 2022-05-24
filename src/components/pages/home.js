import "../scss/style.css";
import Header from "../Header/Header";
import headerBackground from "../img/header-background.png";
import ItemSlider from "../ItemSlider.js";
import customers from "../img/customers.png";
import support from "../img/support.png";
import membership from "../img/membership.png";
import Banner from "../Banner";
import {useState, useEffect} from "react";


function Home() {
  const [items, setItems] = useState([])
  useEffect(
    ()=>{
      fetch("https://my-webshop-api.herokuapp.com/items")
      .then(response => {
        return response.json()
      })
      .then(data =>{
        console.log(data)
        setItems(data)
      })
    }
  ,[])

  return ( 
      <div>
          <Header
          headline="FORÅRSUDSALG"
          background={headerBackground}
          />
          <ItemSlider 
            headline="Nyheder"
            // Check if the news array is in the data, and render it if true
            items={items["news"] ? items.news : []}
          />
          <ItemSlider 
            headline="Populære"
            items={items["populare"] ? items.populare : []}
          />
          <Banner 
            headline="VI GÅR OP I VORES KUNDER"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
            img={customers}
          />
          <Banner 
            headline="FØRSTEKLASSES SUPPORT"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
            img={support}
          />
          <Banner 
            headline="MEDLEMSFORDELE"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
            img={membership}
          />
      </div>
    )
  }
export default Home;