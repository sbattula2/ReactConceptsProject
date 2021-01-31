import React,{useState  } from 'react'

const UseStateObjectSetter = () => {
  
    const obj = {
        prop1: 1,
        prop2: 2,
        prop3: 3
    }

    const[someObj,setObj] = useState(obj)
    
    return (
        <div>
            <h2>Changing Object Properties Using useState</h2>

            <h3>Prop1 val is {someObj.prop1}</h3>
            <button onClick={()=>{setObj({...someObj,prop1:Math.floor(Math.random()*100)})}}>Randomize prop1 value</button>

            <h3>Prop2 val is {someObj.prop2}</h3>
            <button onClick={()=>{setObj({...someObj,prop2:Math.floor(Math.random()*100)})}}>Randomize prop2 value</button>
            
            <h3>Prop3 val is {someObj.prop3}</h3>
            <button onClick={()=>{setObj({...someObj,prop3:Math.floor(Math.random()*100)})}}>Randomize prop3 value</button>
        </div>
    )
}

export default UseStateObjectSetter
