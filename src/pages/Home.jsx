import { Time, Quote, Weather, Focus } from "../components/";
import "./Home.css";
function Home() {
  return (
    <div className="home-wrapper">
      <Time />
      <Focus />
      <Quote />
      <Weather />
    </div>
  );
}

export { Home };
