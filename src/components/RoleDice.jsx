import styled from "styled-components";
import { useState } from "react";
const RoleDice=({roleDice,currentDice})=>{  

        return(
            <DiceContainer>
         <div className="dice" onClick={roleDice}>
            <img src = {`/images/dice_${currentDice}.png`} alt ="d1" />  
         </div>
   <p>Click on Dice to Roll</p>
            </DiceContainer>
        );
};
export default RoleDice;


const DiceContainer = styled.div`
margin-top: 48px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
.dice
{
    cursor: pointer;
}
p
{
    font-size: 24px;
}
`