import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Toronto", "Amserdam", "Johannesberg", "Cape Town", "Paris",
  ];
  // let items: any = [];
  const [clicked, setClicked] = useState(false);

  function handleSelectedItem() {
    console.log("parentComponent: " + clicked);
    setClicked(!clicked);
  }
  return (
    <>
      {/* <ListGroup items={items} heading="Cities" selectedItem={handleSelectedItem} />
      <Alert>This is the message</Alert> */}

      <Alert clicked={clicked}>This is a Success Message!!!</Alert>
      <Button handleClickButton={handleSelectedItem}>Greeting Button</Button>
    </>
  );
}

export default App;
