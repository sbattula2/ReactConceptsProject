import React from 'react'

const EventListenersDemonstration = () => {

    const onClickMethod = () => {
        console.log('Constant definition method button clicked')
    }

    const onClickWParam = (param) => {
        console.log(param)
        console.log('the param above was sent in the method in the button\'s onClick method through a lambda method call')
    }

    return (
        <div>
         <button  onClick={()=>{console.log('Anonymous button clicked')}}> Anonymous Method Button </button>

        <br></br>
        <br></br>

         <button  onClick={onClickMethod}> Constant Definition Button </button>

         <br></br>
         <br></br>

         <button onClick={(param)=>{onClickWParam(param)}}>Constant definition with param button</button>
        </div>
    )
}

export default EventListenersDemonstration
