import HomeCardTemplate from "../components/HomeCardTemplate";
import HomeStats from "../components/HomeStats";
import { useAuth } from "../store/auth";
export default function About() {
  const { user } = useAuth();
  return (
    <section className="container">
      <HomeCardTemplate
        tag={`Welcome${user.user ? ", " + user.user.username : " to vit"}`}
        title="Why choose us?"
        body="
      Expertise: Our team consists of experinced IT proffesionals who are passionate about staying up-to-date with the latest industry trends.
      Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.
      Affordability: We offer competitive pricing without compromising on the quality of our services.
      Reliability: Count on us to be there when you need us. We're commited to ensuring your IT environment is reliable and available 24/7
      "
        image="/startup.svg"
      />
      <HomeStats />
    </section>
  );
}
