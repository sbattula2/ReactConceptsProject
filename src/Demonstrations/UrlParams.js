import React,{useState,useEffect,useRef} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const UrlParams = () => {

    const[message,setMessage] = useState()

    const handleEvents = (event) => {
        setMessage(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleEvents}></input>
            <Link to={`messagePassIn/${message}`}><button>Pass This Message In</button></Link>
        </div>
    )
}

export const MessageDisplayer = () => {

    const[text,setMessage] = useState('some text')

    const{message} = useParams()

    useEffect(() => {
        setMessage(message)
        console.log(text)
    }, [])

    return (
        <div>
            <h2>
                {text}
            </h2>
        </div>
    )

}

export default UrlParams