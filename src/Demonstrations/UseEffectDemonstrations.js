import React, {useEffect,useState,forceUpdate} from 'react'

export const UseEffectFirstTime = () => {

    useEffect(()=>{
        console.log('I only ran once')
    },[])
    
    return (
        <div>
            <h2>Running use effect only during first render</h2>
        </div>
    )
}

export const UseEffectValChange = () => {

    const[randVal,setRandVal] = useState(Math.random())    
    const[randVal2,setRandVal2] = useState(Math.random())

    useEffect(()=>{console.log('Use Effect was run and either randVal or randVal2 was changed');
},[randVal,randVal2])

    return (
        <div>

            <h2>Running use effect after value changes</h2>
            <h2>Val 1: {randVal}</h2>
            <button onClick={()=>{setRandVal(Math.random());setRandVal(Math.random())}}>Randomize val 1</button>

            <h2>Val 2: {randVal2}</h2>
            <button onClick={()=>{setRandVal2(Math.random());setRandVal2(Math.random())}}>Randomize val 2</button>

        </div>
    )
}

export const UseEffectUseState = () => {

    const[someVal,setVal] = useState(Math.random())

    useEffect(() => {
        console.log('run wenever rerender is run (in this case rerenders are caused by useState)')
    })

    return (
        <div>
            <h2>Running use effect after useState is called</h2>
            <h3>{someVal}</h3>
            <button onClick={()=>{setVal(Math.random())}}>Randomize value</button>
        </div>
    )
}