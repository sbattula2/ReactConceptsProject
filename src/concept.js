import Demonstration from "./Demonstration";
import './index.css'

export default function Concept({topic,information}){

    return <div className='concept'>
        <div className='content'>
            <h1>{topic}</h1>    
            <ul>
            {
                information.map((object,index)=>{ 
                    //Questions
                    if(index%2===0){
                        return <li className='questionBullet' key={index}>{object}<br></br></li> 
                    }
                    //Answers
                    else{
                        return <li className='answerBullet' key={index}>{object}</li> 

                    }
                })
            }
            </ul>
            <br></br>
            
            <Demonstration conceptName={topic}></Demonstration>
        </div>
    </div>

}

