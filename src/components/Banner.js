const Banner = ({headline, text, img}) => {
    const styling = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`
    }
    return ( 
        <section style={styling} className="banner">
            <article>
                <h2>{headline}</h2>
                <p>{text}</p>
            </article>
        </section>
     );
}
 
export default Banner;