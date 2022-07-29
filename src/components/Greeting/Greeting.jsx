import "./Greeting.css";
import { useUser } from "../../context";
function Greeting({ hours }) {
  const { user } = useUser();
  const greeting =
    (hours < 12 && `Morning`) ||
    (hours < 17 && `Afternoon`) ||
    hours < 5 ||
    (hours >= 17 && `Evening`);
  return (
    <p className="greeting mt-9">
      Good {greeting}, {user.userName}.
    </p>
  );
}

export { Greeting };
