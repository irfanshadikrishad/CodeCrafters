import CountUp from 'react-countup';

export default function HomeStats() {
  return (
    <div className="home_part_2">
      <div>
        <h2>{<CountUp start={0} end={50} />}+</h2>
        <p>Registered Companies</p>
      </div>
      <div>
        <h2>{<CountUp start={0} end={10000} />}+</h2>
        <p>Happy Clients</p>
      </div>
      <div>
        <h2>{<CountUp start={0} end={500} />}+</h2>
        <p>Well Known Developers</p>
      </div>
      <div>
        <h2>24/7</h2>
        <p>Service</p>
      </div>
    </div>
  );
}
