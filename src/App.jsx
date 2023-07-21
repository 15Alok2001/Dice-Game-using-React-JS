// import styled from "styled-components";
import Start from "./components/Start";
import GamePlay from "./components/GamePlay";
import { useState } from "react";
function App() {
const[isGameStarted, setIsGameStarted] = useState(false);
const toggleGamePlay = ()=>
{
  setIsGameStarted((prev)=>!prev);
};
  return (
    <>
    {
      isGameStarted ? <GamePlay/> :<Start toggle={toggleGamePlay}/>
    }
    </>
  );
}

export default App;

 
// const Button = styled.button`
// background-color: black;  
// color:white;
// padding: 10px;
// `;
