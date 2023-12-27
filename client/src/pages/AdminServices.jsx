import { useEffect, useState } from "react";
import { PiUserCircleMinusFill } from "react-icons/pi";

export default function AdminServices() {
    const [services, setServices] = useState([]);

    const getServices = async () => {
        const request = await fetch("https://codecrafters.up.railway.app/api/data/service", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        const response = await request.json();
        if (request.status === 200) {
            setServices(response);
        }
    }

    useEffect(() => {
        getServices();
    }, [])
    return <section className="admin_services">
        {services && services.map((service) => {
            return <section key={service._id} className="adminServiceIndividual">
                <img src={`.${service.image}`} alt={service.image} />
                <div className="servicePOP">
                    <p className="serviceTitle">{service.service}</p>
                    <p>${service.price}</p>
                </div>
                <p>{service.description}</p>
                <p>by {service.provider}</p>
                <button className="admin_button serviceDelete">{<PiUserCircleMinusFill />}</button>
            </section>
        })}
    </section>
}