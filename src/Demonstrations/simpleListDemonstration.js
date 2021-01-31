export default function SimpleListDemonstration(){
    let players = ['LeBron James','Michael Jordan','Magic Johnson','Tim Duncan','Wilt Chamberlain']

    return <div>
        <h2>Mapping Simple Lists Demonstration</h2>
    {  
    players.map((object,index)=>{
        return <h4 key={index}>{object}</h4>
    })
    }
    <Summary></Summary>
    </div>
}

function Summary(){
    return <h3>So in this demonstration, I mapped a simple list of players to heading 4's</h3>
}