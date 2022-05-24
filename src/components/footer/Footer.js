import FooterLink from "./FooterLink";
const Footer = ({weekdays, saturdays, sundays, payments, copyright}) => {
    return ( 
        <footer>
            <section className="upper-footer">
                <article className="opening-hours">
                    <h2>Åbningstider</h2>
                    <p>Man-Fre: {weekdays}</p>
                    <p>Lørdag: {saturdays}</p>
                    <p>Søndag: {sundays}</p>
                </article>
                <section className="footer-nav">
                    <FooterLink
                        headline="Om Os" 
                        links={
                            [
                                {
                                    id: 1,
                                    text: "Værdier",
                                    link: "#",
                                },
                                {
                                    id: 2,
                                    text: "Historie",
                                    link: "#",
                                },
                                {
                                    id: 3,
                                    text: "Butikker",
                                    link: "#",
                                },
                            ]
                        }
                    />
                    <FooterLink
                        headline="Kundeservice"
                        links= {
                            [
                                {
                                    id: 1,
                                    text: "Returret",
                                    link: "#",
                                },
                                {
                                    id: 2,
                                    text: "Pickup",
                                    link: "#",
                                },
                                {
                                    id: 3,
                                    text: "Databeskyttelse",
                                    link: "#",
                                },
                            ]
                        }
                    />
                    <FooterLink 
                        headline="Karriere"
                        links={
                            [
                                {
                                    id: 1,
                                    text: "Ledige stillinger",
                                    link: "#",
                                }
                            ]
                        }
                    />
                </section>
            </section>
            <section className="lower-footer">
                <h4>{copyright}</h4>
                <img src={payments} alt="payment methods" />
            </section>
        </footer>
     );
}
 
export default Footer;