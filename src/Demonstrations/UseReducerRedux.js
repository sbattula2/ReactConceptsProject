// import React,{useReducer,useRef} from 'react'

// const UseReducerRedux = () => {

//     const[names,dispatch] = useReducer((state,action)=>{
//         switch(action.type){
//             case 'add':
//                 console.log('added')
//                 return [...state,{name:action.value}]
            
//             case 'remove':
//                 console.log('removed')
//                 return state.filter((obj)=>{console.log(obj);console.log(obj.name!==action.value);return obj.name!==action.value})

//             default:
//                 break; 

//         }
//     },[])

//     const addName = useRef('')
//     const removeName = useRef('')

//     return (
//         <div>
//             <h2>Use Reducer Redux Demonstration</h2>

//             {
//                 names.map((obj)=>{
//                     //console.log(name)
//                     return <h3>{obj.name}</h3>
//                 })
//             }

//                 <input type="text" ref={addName}></input>
//                 <button onClick={()=>{dispatch({type:'add',value:addName.current.value})}} >Add Name</button>

//                 <input type="text" ref={removeName}></input>
//                 <button onClick={()=>{dispatch({type:'remove',value:removeName.current.value})}}>Remove Name</button>
            
//         </div>
//     )
// }

// export default UseReducerRedux
import React,{useReducer,useRef} from 'react'

const UseReducerRedux = () => {

    const inputVal = useRef('')
    
    const[state,dispatch] = useReducer((state,action)=>{
        switch(action.type){
            case 'add':
                return [...state,{name:action.value}]
            case 'remove':
                return state.filter((object)=>{
                    return object.name != action.value
                })
        }
    },[])
    
    return (
        <div>

            <h2>Names</h2>
            {
                state.map((object)=>{
                    return <h3>{object.name}</h3>
                })
            }

            <input type="text" ref={inputVal}></input>
            <button onClick={()=>{dispatch({type:'add',value:inputVal.current.value})}}>Add Name</button>
            <button onClick={()=>{dispatch({type:'remove',value:inputVal.current.value})}}>Remove Name</button>

        </div>
    )
}

export default UseReducerRedux
