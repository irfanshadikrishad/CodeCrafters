import { useEffect, useState } from "react";
import ServiceBox from "../components/ServiceBox";

export default function Service() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function Services() {
      const request = await fetch("https://codecrafters.up.railway.app/api/data/service");
      const response = await request.json();
      if (request.ok) {
        setServices(response);
      } else {
        console.log(response);
      }
    }
    Services();
  }, [])
  return <section className="container">
    <p className="services_header">Services</p>
    <section className="services_main">
      {services.map((service) => {
        return <ServiceBox
          key={service._id}
          image={service.image}
          title={service.service}
          desc={service.description}
          price={service.price}
          provider={service.provider}
        />
      })}
    </section>
  </section>;
}
