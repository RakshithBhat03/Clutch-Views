import "./Greeting.css";
function Greeting({ hours }) {
  const greeting =
    (hours < 12 && `Morning`) ||
    (hours < 17 && `Afternoon`) ||
    hours < 5 ||
    (hours >= 17 && `Evening`);
  return <p className="greeting mt-9">Good {greeting}, User.</p>;
}

export { Greeting };
