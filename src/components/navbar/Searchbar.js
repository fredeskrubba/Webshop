import {ReactComponent as SearchLogo} from "../img/search-icon.svg";
const Searchbar = () => {
    return ( 
        <div className="search-bar">
            <SearchLogo/>
            <input type="text" />
        </div>
     );
}
 
export default Searchbar;