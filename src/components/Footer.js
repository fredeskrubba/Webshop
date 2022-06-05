

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
        </footer>
     );
}
 
export default Footer;