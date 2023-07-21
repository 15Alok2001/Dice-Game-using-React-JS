import styled from "styled-components";
const Rules =()=>
{
    return(
        <RuleContainer>
        <h2>
            How to play dice game 
        </h2>
        <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
            after the click on dice if same selected number appears on dice you will 
            get same point as on dice{""}
        </p>
        <p>
            if you get wrong guess two points will be deducted
        </p>
        </div>
        </RuleContainer>
    )
};
export default Rules;

const RuleContainer = styled.div`
background-color: #FBF1F1;
padding:20px;
max-width: 800px;
margin:0 auto;
margin-top: 50px;
border-radius: 10px;
h2{
     font-size: 24px;
     font-weight: bold;
}
.text{
    margin-top: 24px;
}

`
