import Button from "./Button";
import "./Header.css";
function Header({ onClick }) {
  return (
    <header className="header">
      <h3>Favorite Movies</h3>
      <Button onClick={onClick}>ADD MOVIE</Button>
    </header>
  );
}

export default Header;
