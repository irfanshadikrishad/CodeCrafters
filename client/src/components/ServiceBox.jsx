export default function ServiceBox({ image, provider, price, title, desc }) {
    return <section className="service">
        <div className="service_img">
            <img
                className="service_image"
                src={image}
                alt="service"
                draggable="false"
            />
        </div>
        <div className="serviece_h">
            <h1>{title}</h1>
            <p>{price}$</p>
        </div>
        <p className="service_desc">{desc}</p>
        <p className="service_provider">
            <span className="service_by">by &nbsp;</span>
            {provider}
        </p>
    </section>
}