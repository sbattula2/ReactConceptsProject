
export default function PropDemonstration(){
    return <PropDummy1 info='Props Demonstration'></PropDummy1>
}

function PropDummy1({info}){
    return (<div>
            <h2>{info}</h2>
            <h4>Here, the stuff being displayed above is done through props where it was passed to the tag from when the tag was declared.</h4>        
            </div>
        )
}
