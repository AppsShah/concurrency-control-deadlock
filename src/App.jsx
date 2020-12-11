import React from "react";
import Main from './main/Main'
import {Route,Switch} from 'react-router-dom'
import Bsem from './Binary/Bsem'
import Tsl from './tsl/Tsl'
import Csem from './counting/Counting'
import Pc from './pcproblem/Pc'
import Banker from './Bankers/Banker'
import Turn from './turn/Turn'
import Petrson from './paterson/Paterson'
function App(){
    return(
        <>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/tsl" component={Tsl}/>
            <Route path="/binary" component={Bsem}/>
            <Route path="/counting" component={Csem}/>
            <Route path="/pc" component={Pc}/>
            <Route path="/banker" component={Banker}/>
            <Route path="/turn" component={Turn}/>
            <Route path="/petrson" component={Petrson}/>
        </Switch>
        </>
    )
}
export default App