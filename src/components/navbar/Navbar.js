import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { ReactComponent as MapIcon} from "../img/maps.svg";
import Searchbar from "./Searchbar";


const Navbar = ({logo, icons, map, toggleMap}) => {
    const iconList = icons.map(icon =>{

        return <Link to={icon.route} key={icon.id}>
            <div>
                <icon.svg/>
            </div>
        </Link>
        
    })
    return ( 
        <nav>
            <Link className="logo" to="/">{logo}</Link>
            <div className="cat-container">
                <p className="categories">Kategorier</p>
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