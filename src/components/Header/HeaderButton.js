import {ReactComponent as Arrow} from "../../components/img/arrow.svg";

const HeaderButton = ({buttonText}) => {
    return ( 
        <button>
            <p>{buttonText}</p>
            <Arrow/>
        </button>
     );
}
 
export default HeaderButton;
