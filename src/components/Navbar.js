import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { ReactComponent as MapIcon} from "./img/maps.svg";


const Navbar = ({logo, icons, map, toggleMap}) => {
    const iconList = icons.map(icon =>{

        return <Link to={icon.route} key={icon.id}>
            <div>
                <icon.svg/>
                <p>{icon.text}</p>
            </div>
        </Link>
        
    })
    return ( 
        <nav>
            <Link className="logo" to="/">{logo}</Link>
            <div className="map-icon-container" onClick={()=>{toggleMap(map.current)}}>
                <MapIcon className="map-icon"/>
                <p>Find Butik</p>
            </div>
            <div className="icons">
                {iconList}
            </div>
        </nav>
     );
}
 
export default Navbar;