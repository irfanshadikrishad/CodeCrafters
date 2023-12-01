import HomeCardTemplate from "../components/HomeCardTemplate";
import HomeStats from "../components/HomeStats";

export default function About() {
  return (
    <section className="container">
      <HomeCardTemplate
        tag="Welcome to Vit"
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
