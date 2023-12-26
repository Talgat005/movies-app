import Button from "./Button";
import "./Header.css";
import { films } from "../utils/constans";
function Header({ onClick }) {
  return (
    <header className="header">
      <h3>{films}</h3>
      <Button onClick={onClick}>ADD MOVIE</Button>
    </header>
  );
}

export default Header;
