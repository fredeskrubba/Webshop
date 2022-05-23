const FormSection = ({description, inputs, socials, buttonText}) => {
    return ( 
        <section className="form-section">
            <form action="">
                <p>{description}</p>
                <article className="input-field">
                    <div>
                        {inputs.map(input =>{
                            return <input type={input.type} placeholder={input.placeholder} key={input.id}/>
                        })}
                    </div>
                    <button>{buttonText}</button>
                </article>
            </form>
            <section>
                {socials.map(icon=>{
                    return <a href="#" key={icon.id}><icon.svg/></a>
                })}
            </section>
        </section>
     );
}
 
export default FormSection;
