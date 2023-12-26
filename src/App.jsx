import Header from "./components/Header";
import Main from "./components/MainContent";
import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="container">
      <Header onClick={handleClickOpen}></Header>
      {open && <Main></Main>}
    </div>
  );
}

export default App;
