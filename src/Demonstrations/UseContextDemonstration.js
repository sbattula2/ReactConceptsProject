import React,{useState,useRef,useContext} from 'react'

const someContext = React.createContext()

const UseContextDemonstration = () => {

    const[message2,setMessage] = useState('')
    const inputVal = useRef('')

    return (
        <div>
            <h2>useContext Demontration</h2>
            <input type="text" ref={inputVal}></input>
            <button onClick={()=>{setMessage(inputVal.current.value)}}>Send Message</button>

            <someContext.Provider value={{message:message2,senderName:'Some sender'}}>
            <TopLayer1></TopLayer1> 
            </someContext.Provider>

        </div>
    )
}

const TopLayer1 = () => {

    const obj = useContext(someContext)

    return (
        <div>
            <h3>Hi, I got passed this message: {obj.message} from the {obj.senderName} component</h3>
            
            <TopLayer2></TopLayer2>
       
        </div>
    )
}

const TopLayer2 = () => {

    const obj = useContext(someContext)

    return (
        <div>
            <h3>Hi, I got passed this message: {obj.message} from the {obj.senderName} component</h3>
       
            <TopLayer3></TopLayer3>
       
        </div>
    )
}

const TopLayer3 = () => {

    const obj = useContext(someContext)

    return (
        <div>
            <h3>Hi, I got passed this message: {obj.message} from the {obj.senderName} component</h3>
       
            <TopLayer4></TopLayer4>
       
        </div>
    )
}

const TopLayer4 = () => {

    const obj = useContext(someContext)

    return (
        <div>
            <h3>Hi, I got passed this message: {obj.message} from the {obj.senderName} component</h3>
        </div>
    )
}


export default UseContextDemonstration
