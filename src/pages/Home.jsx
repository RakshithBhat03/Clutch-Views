import { Time, Quote } from "../components/";
import "./Home.css";
function Home() {
  return (
    <div className="home-wrapper">
      <Time />
      <Quote />
    </div>
  );
}

export { Home };
