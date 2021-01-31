import {withRouter} from 'react-router-dom'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

const NormalSwitch = () => {
    return (
    <div>
    <NormalSwitchMenu></NormalSwitchMenu>
    
    <Route path="/RoutingModule/NormalSwitch/A">
        <h2>This is Page A</h2>
        <SwitchPage pageLetter='A'></SwitchPage>

    </Route>
    
    <Route path="/RoutingModule/NormalSwitch/B">
        <h2>This is Page B</h2>
        <SwitchPage pageLetter='B'></SwitchPage>

    </Route>
    
    <Route path="/RoutingModule/NormalSwitch/C">
        <h2>This is Page C</h2>
        <SwitchPage pageLetter='C'></SwitchPage>

    </Route>
    
    <Route path="/RoutingModule/NormalSwitch/D">
        <h2>This is Page D</h2>
        <SwitchPage pageLetter='D'></SwitchPage>

    </Route>

    </div>)
}

const NormalSwitchMenu = () => {

    return(
    <ul>

    <Link to='A'><h4>Page A</h4></Link>
    <Link to='B'><h4>Page B</h4></Link>
    <Link to='C'><h4>Page C</h4></Link>
    <Link to='D'><h4>Page D</h4></Link>

    </ul>
    )
}

const SwitchPage = ({pageLetter}) =>{
    return(
    <h2>You are in page {pageLetter}</h2>
    )

}

export default  NormalSwitch;