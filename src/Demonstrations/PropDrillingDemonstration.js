import React,{useState,useRef} from 'react'

const PropDrillingDemonstration = () => {

    const[message,setMessage] = useState('')
    const inputVal = useRef('')

    return (
        <div>
            <h2>Prop Drilling Demontration</h2>
            <input type="text" ref={inputVal}></input>
            <button onClick={()=>{setMessage(inputVal.current.value)}}>Send Message</button>

            <TopLayer1 message={message} senderName={'PropDrillingDemonstration'}></TopLayer1>
        </div>
    )
}

const TopLayer1 = ({message,senderName}) => {
    return (
        <div>
            <h3>Hi, I got passed this message: {message} from the {senderName} component</h3>
            <TopLayer2 message={message} senderName={'TopLayer1'}></TopLayer2>
        </div>
    )
}

const TopLayer2 = ({message,senderName}) => {
    return (
        <div>
            <h3>Hi, I got passed this message: {message} from the {senderName} component</h3>
            <TopLayer3 message={message} senderName={'TopLayer2'}></TopLayer3>
        </div>
    )
}

const TopLayer3 = ({message,senderName}) => {
    return (
        <div>
            <h3>Hi, I got passed this message: {message} from the {senderName} component</h3>
            <TopLayer4 message={message} senderName={'TopLayer3'}></TopLayer4>
        </div>
    )
}

const TopLayer4 = ({message,senderName}) => {
    return (
        <div>
            <h3>Hi, I got passed this message: {message} from the {senderName} component</h3>
        </div>
    )
}



export default PropDrillingDemonstration
