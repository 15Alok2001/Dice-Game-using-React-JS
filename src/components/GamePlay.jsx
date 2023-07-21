import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import styled from "styled-components"
import RoleDice from "./RoleDice"
import Rules  from "./Rules"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
const GamePlay = ()=>
{    
  const [selectedNumber,setSelectedNumber]= useState();
  const[currentDice,setCurrentDice]=useState(1)
  const[score,setscore] = useState(0)
  const[error,setError]= useState("");
  const[showRules,setShowRules]=useState(false);

  const generateRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
};
const roleDice =()=>
{
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);
    if(!selectedNumber)
    {
     setError("You have not seleted any number")
     return;
    }
    if(selectedNumber==randomNumber)
    {setscore((prev)=>prev+randomNumber);}
    else{
        setscore((prev)=>prev-2)
    }
    setSelectedNumber(undefined)

};
const resetScore =()=>
{
     setscore(0);
};

    return (
<MainContainer>
    <div className="top_section">
    <TotalScore score={score}/>
    <NumberSelector error = {error} 
    setError={setError}
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice currentDice={currentDice}
    roleDice={roleDice}/>
    <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button 
        onClick={()=>setShowRules(prev=>!prev)}>{showRules ?"Hide":"Show"}  Rules </Button>
    </div>
    {showRules&&<Rules/>}
</MainContainer>
    )
}
export default GamePlay
const MainContainer = styled.main`
padding-top:70px;
    .top_section{
        display : flex;
        justify-content: space-around;
        align-items: end;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:10px;
        margin-top: 40px;
        gap :10px;
    }
`;