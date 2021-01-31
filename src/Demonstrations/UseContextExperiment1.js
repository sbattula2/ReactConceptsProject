import React,{useContext} from 'react'

const ContextObject = React.createContext();


const UseContextExperiment1 = () => {
    
    return (
        <div>
        <ContextObject.Provider value={{message:'Some Message',sender:'The Provider'}}>
            <TopLayer1></TopLayer1>
        </ContextObject.Provider>

        </div>
    )
}

const TopLayer1 = () => {

    const obj = useContext(ContextObject)
    console.log(obj)

    return (
        <div>
            <h3>Hi, I got passed this message: {obj.message} from the {obj.sender} component</h3>
        </div>
    )
}

const TopLayer2 = () => {

    const obj = useContext(ContextObject)


    return (
        <div>
            <h3>Hi, I got passed this message: {obj.message} from the {obj.senderName} component</h3>
        </div>
    )
}

const TopLayer3 = () => {


    const obj = useContext(ContextObject)


    return (
        <div>
            <h3>Hi, I got passed this message: {obj.message} from the {obj.senderName} component</h3>
        </div>
    )
}

const TopLayer4 = () => {

    const obj = useContext(ContextObject)


    return (
        <div>
            <h3>Hi, I got passed this message: {obj.message} from the {obj.senderName} component</h3>
        </div>
    )
}


export default UseContextExperiment1
