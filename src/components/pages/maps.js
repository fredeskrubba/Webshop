import "../scss/style.css";
import Header from "../Header/Header";
import headerBackground from "../img/header-background.png";
import ItemSlider from "../ItemSlider.js";
import customers from "../img/customers.png";
import support from "../img/support.png";
import membership from "../img/membership.png";
import Banner from "../Banner";
import {ReactComponent as Cross} from "../img/cross.svg";
import {BrowserRouter as Link, useNavigate} from "react-router-dom";



function Maps() {
  const offers = [
    {
      id: 1,
      name: "Airpods",
      img: "airpods.png",
      price: "50.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      name: "Speaker",
      img: "airpods.png",
      price: 20.00,
      description: "A speaker with good sound"
    },
    {
      id: 3,
      name: "Speaker",
      img: "airpods.png",
      price: 20.00,
      description: "A speaker with good sound"
    },
    {
      id: 4,
      name: "Speaker",
      img: "airpods.png",
      price: 20.00,
      description: "A speaker with good sound"
    },
  ]
  const navigate = useNavigate();
return ( 
    <div>
        <Header
        headline="FORÅRSUDSALG"
        background={headerBackground}
        />
        <ItemSlider 
          headline="Nyheder"
          items={offers}
        />
        <ItemSlider 
          headline="Populære"
          items={offers}
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
        <div className="modal">
              <Cross
                onClick={
                  ()=>{
                    navigate("/")
                  }
                }
              />
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d69432.94110845983!2d9.910344415612984!3d57.05531354194559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spower!5e0!3m2!1sda!2sdk!4v1652695491007!5m2!1sda!2sdk" width="900" height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Maps;