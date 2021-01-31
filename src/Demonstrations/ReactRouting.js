import React from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router'

const ReactRoutingDemonstration = () => {
    const history = useHistory()

    return (
        <div>
            <Link to='/RoutingModule'><h3>Go to Routing Module</h3></Link>
            
        </div>
    )
}

export const MenuBar = () =>{  

    const history = useHistory()


    return <div>
        <ul>
        <Link to='/'><h3>Go to Concept Home</h3></Link>
        <Link to='/RoutingModule'><h3>Go to Routing Module Home</h3></Link>
        <Link to='/RoutingModule/NormalSwitch/' ><h3>Normal Switch</h3></Link>
        <Link to='/RoutingModule/UrlParams/' ><h3>Url Params</h3></Link>

        </ul>
    </div>
}

export default ReactRoutingDemonstration
