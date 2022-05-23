import {ReactComponent as Arrow} from "../img/arrow-right.svg";

const FooterLink = ({links, headline}) => {
    return ( 
        <article className="links">
            <h4>{headline}</h4>
            <div>
                {links.map(
                    link=>{
                        return <a href={link.link} key={link.id}>
                            <Arrow/>
                            {link.text}
                        </a>
                    }
                )}
            </div>
        </article>
     );
}
 
export default FooterLink;