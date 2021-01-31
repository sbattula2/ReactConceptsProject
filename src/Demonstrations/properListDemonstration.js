var objList = [
    {Player:'LeBron James',Rings:4,Team:'Lakers'},
    {Player:'Kevin Durant',Rings:2,Team:'Nets'},
    {Player:'Luka Doncic',Rings:0,Team:'Mavericks'}
]

function ListBlock(props){
    const{Player,Rings,Team} = props.player

    return <h3>Hi I'm {Player}. I've won the NBA {Rings} times. I play for the {Team}.</h3>
}

export default function MapProperList(){
    
    return <div>
    <h2>Mapping Proper List Demonstration</h2>
    {
    objList.map((obj,index)=>{
        return <ListBlock player={obj} key={index}></ListBlock>
    })
    }
    <Summary></Summary>
    </div>
}

function Summary(){
    return <h3>So what's happening here? I make 1 function and in that function I map a list of objects to anoter component. That component breaks down the object into desired properties and make use of them.</h3>
}