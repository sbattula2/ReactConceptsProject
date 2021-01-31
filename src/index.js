import React from 'react'
import ReactDom from 'react-dom'
import Concept from './concept'
import {info} from './info'
import './index.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {MenuBar} from './Demonstrations/ReactRouting'
import NormalSwitch from './Demonstrations/NormalSwitch'
import UrlParams from './Demonstrations/UrlParams'
import {MessageDisplayer} from './Demonstrations/UrlParams'

function MainComponent(){

    return (<Router>
    
        <Route exact path='/'>
            <ConceptList></ConceptList>
        </Route>

        <Route path='/RoutingModule'>
            <MenuBar></MenuBar>
        </Route>

        <Route path='/RoutingModule/NormalSwitch'>
            <NormalSwitch></NormalSwitch>

        </Route>

        <Route path='/RoutingModule/UrlParams/messagePassin/:message' children={<MessageDisplayer></MessageDisplayer>}>
            <MessageDisplayer></MessageDisplayer>
        </Route>

        
    </Router>)
    // for(let conceptName in info){
    //     console.log(info[conceptName]['facts'])
    //     for(let i in info[conceptName]['facts']){
    //         console.log(info[conceptName]['facts'][i]);
    //     }
    // }

}

function ConceptList(){
    return (<section name='ConceptList'>
    {Object.keys(info).map(function(concept, index) {
        return <Concept topic={concept} key={index} information={info[concept]['facts']}></Concept>
    })}
    </section>);
}

ReactDom.render(<MainComponent/>,document.getElementById('root'))