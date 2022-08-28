import React, {useState} from "react"


function App() {

    const[input, setInput] = useState({
      height: 0,
      weight: 0
    });

    const [bmi, setBMI] = useState ("");
    const [message, setMessage] = useState("");


    function handleChange(event){
     const {name, value} = event.target;

        setInput(function(prevValue){
          if(name === "height"){
            return{
            height: value,
            weight: prevValue.weight
          };
        }
          else if(name === "weight"){
            return {
            height: prevValue.height,
            weight: value
          };
        } 

        });

    }

    const displayMessage = result =>{
    
      if(result < 18){
        setMessage("you are underweight");
        }
        else if(result >= 18 && result <25){
          setMessage("You are in great shape!!");
        }
        else{
          setMessage("you are overweight");
        }
    

    }

    function calculateBMI(event){
      event.preventDefault();

      if(input.weight === 0 || input.height === 0){
        alert("Please enter valid height and weight");
      }
      else{

        let result = input.weight/Math.pow((input.height/100), 2);
        result = result.toFixed(1);
        setBMI(result);

        displayMessage(result);
      }
     }

      function clearResults(){
           setInput(() =>{
            return{
            height: 0,
            weight: 0 
        };
      });
          
}

  
    
  return (
    <div className = "container">
        <form>
        <div className = "textbox height"> 
          <label>Height (cm)</label>
          <input type = "text" name = "height" value = {input.height} onChange = {handleChange}></input>
          </div>
          
          <div className = "textbox weight">
          <label>weight (kg)</label>
          <input type = "text" name = "weight" value = {input.weight} onChange = {handleChange}></input>
        
          </div>
          <button className = "submit" type = "submit" onClick = {calculateBMI} >Calculate</button>
          <button className = "clear" type = "submit" onClick = {clearResults} >clear</button>
        </form>
        <div className = "bmi">
        <h1>Your BMI is: {bmi}</h1>
        <p>{message}</p>

        </div>
    </div>
    );
  
}

export default App;
