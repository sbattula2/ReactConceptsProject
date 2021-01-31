// import React,{useReducer} from 'react'

// const UseReducerBasic = () => {

//     const[num,dispatch] = useReducer((state,action) => {
//         return state+action;
//     },0)

//     return (
//         <div>
//             <h2>Use Reducer Basic Demonstration</h2>
            
//             <h3>{num}</h3>

//             <button onClick={()=>{dispatch(1)}}>
//                 increase sum by 1
//             </button>
//         </div>
//     )
// }

// export default UseReducerBasic
import React,{useReducer} from 'react'

const UseReducerBasic = () => {

    const [state,dispatch] = useReducer((state, action)=>{
        return state+1;
    },0)

    return (
        <div>
        <h3>UseReducer State: {state}</h3>
        <button onClick={()=>{dispatch(1)}}>Add 1</button>        
        </div>
    )
}

export default UseReducerBasic
