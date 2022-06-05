import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { ReactComponent as MapIcon} from "../img/maps.svg";
import Searchbar from "./Searchbar";
import {ReactComponent as PhoneIcon} from "../img/phone.svg";
import {ReactComponent as LaptopIcon} from "../img/laptop.svg";
import {ReactComponent as WasherIcon} from "../img/washer.svg";
import {ReactComponent as ControllerIcon} from "../img/controller.svg";
import {ReactComponent as GearIcon} from "../img/gear.svg";

const Navbar = ({logo, icons, map, toggleMap}) => {
    const iconList = icons.map(icon =>{

        return <Link to={icon.route} key={icon.id}>
            <div>
                <img src={icon.svg} alt={icon.alt} />
            </div>
        </Link>
        
    })
    return ( 
        <nav>
            <div className="left-nav">
                <Link className="logo" to="/">{logo}</Link>
                <div className="cat-container">
                    <p className="categories">Kategorier</p>
                    <article className="cat-tab">
                        <div className="cat-link">
                            <PhoneIcon/>
                            <p>Telefoner</p>
                        </div>
                        <div className="cat-link">
                            <LaptopIcon/>
                            <p>Computere</p>
                        </div>
                        <div className="cat-link">
                            <WasherIcon/>
                            <p>Hvidevarer</p>
                        </div>
                        <div className="cat-link">
                            <ControllerIcon/>
                            <p>Spil & Konsoller</p>
                        </div>
                        <div className="cat-link">
                            <GearIcon/>
                            <p>Computerdele</p>
                        </div>
                    </article>
                </div>
            </div>
            <Searchbar/>
            <div className="map-icon-container" onClick={()=>{toggleMap(map.current)}}>
                <MapIcon className="map-icon"/>
            </div>
            <div className="icons">
                {iconList}
            </div>
        </nav>
     );
}
 
export default Navbar;