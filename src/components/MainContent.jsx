import { movies } from "../utils/constans";
import Button from "./Button";
import "./Main.css";

function Main() {
  return (
    <main>
      {movies.map((item) => (
        <div key={item.id} className="moviesBox">
          <img src={item.img} className="imgMovie" />
          <div>
            <h3>{item.title}</h3>
            <Button>{item.rating}/5</Button>
            <Button style={{ backgroundColor: "red" }}>DELETE</Button>
            {open && (
              <Button style={{ backgroundColor: "BLUE", borderRadius: "20px" }}>
                EDIT
              </Button>
            )}
          </div>
        </div>
      ))}
    </main>
  );
}

export default Main;
