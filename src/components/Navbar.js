import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


const Navbar = ({logo, icons}) => {
    const iconList = icons.map(icon =>{
        return <Link to={`/${icon.route}`}>
            <div>
                <icon.svg/>
                <p>{icon.text}</p>
            </div>
        </Link>
        
    })
    return ( 
        <nav>
            <Link className="logo" to="/">{logo}</Link>
            <div className="icons">
                {iconList}
            </div>
        </nav>
     );
}
 
export default Navbar;