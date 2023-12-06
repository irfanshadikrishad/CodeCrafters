import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function HomeCardTemplate({ tag, title, body, image }) {
  return (
    <div className="home_part_1">
      <div>
        <p>{tag}</p>
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="homeLinks">
          <NavLink to="/contact">Contact Now</NavLink>
          <NavLink>Learn More</NavLink>
        </div>
      </div>
      <div>
        <img src={image} alt="astronaut" draggable="false" />
      </div>
    </div>
  );
}
