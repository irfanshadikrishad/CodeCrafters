import { NavLink } from "react-router-dom";
import HomeStats from "../components/HomeStats";

export default function Home() {
  return (
    <section className="container">
      <div className="home_part_1">
        <div>
          <p>Best IT company</p>
          <h1 className="homeTitle">Welcome to CodeCrafters</h1>
          <p>
            Are you ready to take your business to the next level with
            cutting-edge IT solutions? Look no further! At Vit we specialize in
            providing innovative IT services and solutions tailored to meed your
            unique needs.
          </p>
          <div className="homeLinks">
            <NavLink to="/contact">Contact Now</NavLink>
            <NavLink>Learn More</NavLink>
          </div>
        </div>
        <div className="hp1_o2">
          <img src="/astronaut.svg" alt="astronaut" draggable="false" />
        </div>
      </div>
      <HomeStats />
      <div className="home_part_3">
        <div>
          <img className="home_getstartedImg" src="/computer.svg" alt="computer" draggable="false" />
        </div>
        <div>
          <p>We are here to help you</p>
          <h1 className="getStarted">Get started today</h1>
          <p>
            Ready to take the first step towards a more efficient and secure IT
            infrastructure? Contact us today for a free consulation and lets
            discuss how vit can help your business grow in the digital age.
          </p>
          <div className="homeLinks">
            <NavLink to="/contact">Contact Now</NavLink>
            <NavLink>Learn More</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
