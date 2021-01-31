var simpleList = ['Albert Einstein','Richard Feynnman','Carl Gauss']


function KeyOperatorDemonstration(){

    return <div>
        <h2>Key Operator Demonstration</h2>
    {
    simpleList.map((object,key)=>{
        return <h3 key={key}>{object}</h3>
    })
    }

    </div>


}

function Summary(){
    return <h3>So what happened here? I simply mapped a list to a ton of h3 tags. And each h3 HAS to has have a key attached to it. And in order to do a key operator, in any tag you just have to do {`key={whateverKey}`}</h3>
}