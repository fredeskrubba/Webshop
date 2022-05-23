import HeaderButton from "./HeaderButton";
const Header = ({background, headline}) => {
    const styling = {
        backgroundImage: `url(${background})`,
    }
    return ( 
        <header style={styling}>
            <h1>{headline}</h1>
            <HeaderButton
                buttonText="SE UDVALG"
            />
        </header>
     );
}



export default Header;