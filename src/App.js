import React from "react";
import Card from "./components/Card";

function App() {
  return (
   <>
  <Card design="red" type="green" child="blue" text="HTML" text2="Javascript" text3="Python"/>
  {/* <Card type="green"/>
  <Card text="green"/> */}
   </>
  );
}

export default App;
