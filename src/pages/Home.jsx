import { Time, Quote, Weather } from "../components/";
import "./Home.css";
function Home() {
  return (
    <div className="home-wrapper">
      <Time />
      <Quote />
      <Weather />
    </div>
  );
}

export { Home };
