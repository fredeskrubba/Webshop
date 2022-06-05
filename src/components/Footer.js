const Footer = ({payments}) => {
    return ( 
        <footer>
            <section className="footer-form-section">
                <article>
                    <h2>TILMELD DIG VORES NYHEDSBREV</h2>
                    <p>Tilmeld dig vores nyhedsbrev, og få de bedste tilbud direkte i din inbox!</p>
                </article>
                <form>
                    <input type="text" />
                    <button type="submit">Tilmeld</button>
                </form>
            </section>
            <img src={payments.src} alt={payments.alt}/>
            <article className="footer-links">
                <div className="link-row">
                    <h3>Om Os</h3>
                    <ul>
                        <li>Historie</li>
                        <li>Værdier</li>
                        <li>Persondatapolitik</li>
                    </ul>
                </div>
                <div className="link-row">
                    <h3>Om Os</h3>
                    <ul>
                        <li>Historie</li>
                        <li>Værdier</li>
                        <li>Persondatapolitik</li>
                    </ul>
                </div>
                <div className="link-row">
                    <h3>Om Os</h3>
                    <ul>
                        <li>Historie</li>
                        <li>Værdier</li>
                        <li>Persondatapolitik</li>
                    </ul>
                </div>
            </article>
            <p className="trademark">©Frederik Skrubbeltrang - 2022</p>
        </footer>
     );
}
 
export default Footer;