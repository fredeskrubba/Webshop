import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


const Navbar = ({logo, icons}) => {
    const iconList = icons.map(icon =>{
<<<<<<< HEAD
        return <Link to={`/${icon.route}`}>
=======
        return <Link to={`/${icon.route}`} key={icon.id}>
>>>>>>> f45fc798228358975299e4103e486ac8f98ecd08
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