import React from 'react';
import Dom from 'react-dom';
// import Bsem from './Binary/Bsem';
// import Main from './main/Main'
import App from './App'
// import Counting from './counting/Counting';
// import Temp from './Temp';
// import Bmain from './Binary/Bmain'
// import Tsl from './tsl/Tsl'
// import Pcproblem from './pcproblem/Pc'
// import Banker from './Bankers/Banker'
// import Turn from './turn/Turn'
// import Paterson from './paterson/Paterson'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
Dom.render(
    <>
    <BrowserRouter>
        {/* <Turn /> */}
        {/* <Paterson /> */}
    {/* <Banker /> */}
            <App />
        {/* <Pcproblem /> */}
        {/* <Main /> */}
        {/* <Bsem /> */}
        {/* <Counting /> */}
        {/* <Bmain /> */}
        {/* <Tsl /> */}
    </BrowserRouter>
    </>
    ,document.getElementById("root")
)