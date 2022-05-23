const News = ({headline, items}) => {
    return (
        <section className="item-slider">
            <h2>{headline}</h2>
            <article className="news-cards">
                {items.map(
                    item => {
                        return <div className="card" key={item.id}>
                                <img src={`${item.img}`} alt="fuck" />
                                <article className="text-box">
                                    <div className="text-box-content">
                                        <div className="flex-container">
                                            <h3>{item.name}</h3>
                                            <p>{item.price}$</p>
                                        </div>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </article>
                            </div>
                    }
                    
                )}
            </article>
        </section>
     );
}
 
export default News;