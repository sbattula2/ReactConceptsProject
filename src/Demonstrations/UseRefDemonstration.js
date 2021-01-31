import React,{useRef,useEffect} from 'react'

const UseRefDemonstration = () => {

    let someVal = useRef('')
    console.log(someVal)

    useEffect(() => {
        console.log(someVal.current.value)
    }, [someVal])

    const submitForm = (event) =>{
        event.preventDefault();
        console.log(someVal.current.value)
    }

    return (
        <div>
            <h2>useRef Demonstration</h2>
            <h3>someVal is equal to {someVal.current.value}</h3>
            <form onSubmit={submitForm}>
                <input type="text" ref={someVal}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default UseRefDemonstration