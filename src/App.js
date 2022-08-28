import React, {useState} from "react"


function App() {

    const[input, setInput] = useState({
      height: 0,
      weight: 0
    });

    const [bmi, setBMI] = useState ("");


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

 

    function calculateBMI(event){
      event.preventDefault();

        const result = input.weight/Math.pow(input.height, 2);

        setBMI(result.toFixed(1));
        
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
          <label>Height (m)</label>
          <input type = "text" name = "height" value = {input.height} onChange = {handleChange}></input>
          </div>
          
          <div className = "textbox weight">
          <label>weight (kg)</label>
          <input type = "text" name = "weight" value = {input.weight} onChange = {handleChange}></input>
        
          </div>
          <button type = "submit" onClick = {calculateBMI} >Calculate</button>
          <button type = "submit" onClick = {clearResults} >clear</button>
        </form>
        <div className = "bmi">
        <h1>Your BMI is: {bmi}</h1>
        </div>
    </div>
    );
  
}

export default App;
