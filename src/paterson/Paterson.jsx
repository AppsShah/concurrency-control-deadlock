import React from 'react'
import Card from 'react-bootstrap/Card'
let turn=0;
const heading={
    height: "3rem",
    backgroundColor: "aqua",
    textAlign: "center",
    // filter: "invert(1)"
}
const buttons={
    width: "10rem",
    height: "8rem",
    backgroundColor: "aqua",
    border: "0.3rem solid rgb(40,41,44)",
    margin: "3rem"
}
const turnvariable={
    font: "2rem",
    weight: "bolder",
    border: "0.3rem solid grey"
}
const criticalsec={
    border: "0.3rem solid grey",
    shadow: "0.5rem 0.5rem grey",
    margin: "2rem"
}
// const table={
//     border: "0.2rem solid black",
//     marginLeft: "20%"
// }
let Flag=[false,false];
function critical(event)
{
        let buttonid=event.target.id
        let button=document.getElementById(buttonid)
        let criticalsection=document.getElementById("maindiv")
        let buttondiv=document.getElementById("buttondiv")
        let time=document.getElementById("time")
        // turn=true
        if(buttonid==="button1")
        {
            Flag[0]=true
        }
        if(buttonid==="button2")
        {
            Flag[1]=true
        }
        if(turn===0)
        {   
            turn=1
            time.innerHTML=`Turn variable: ${turn} , Process Flag(Intrested in Using Critical Section) Process 1: ${Flag[0]} Process 2: ${Flag[1]}`
            setTimeout(()=>{
                setTimeout(()=>{
                        buttondiv.appendChild(button)
                        // console.log(turn)
                        turn=0
                        time.innerHTML=`Turn variable: ${turn} , Process Flag(Intrested in Using Critical Section) Process 1: ${Flag[0]} Process 2: ${Flag[1]}`
                },10000)
                criticalsection.appendChild(button)
                // criticalsection.remove(button)
            },1000)
        }
        else
        {
            alert("Critical section not available")
        }
}
function Turn(){
    return(
        <>
            <h1 style={heading}>Patersion Algorithm</h1>
            <div style={{display: "grid",gridTemplateColumns: "auto auto auto"}}>
            <Card style={{ width: '18rem',margin: '3rem'}}>
  <Card.Body>
    <Card.Title>Information Card</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Patersion Algorithm(Solution)</Card.Subtitle>
    <Card.Text>
        {/* <p>Turn Variable or Strict Alternation Approach</p> */}
        This is a software mechanism implemented at user mode. It is a busy waiting solution can be implemented for only two processes. It uses two variables that are turn variable and interested variable.
    </Card.Text>
    <Card.Link href="https://www.javatpoint.com/os-paterson-solution">More Info</Card.Link>
    {/* <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
<div id="buttondiv">
            <button id="button1" onClick={critical} style={buttons}> Process 1</button>
<button id="button2" onClick={critical} style={buttons}> Process 2</button>
            </div> 
            <div style={{margin: "3rem",border: "0.2rem solid black"}}>
                <ol>
                    <li> Mutual Exclusion ✔️</li>
                    <li> Process ✔️</li>
                    <li> Bound Waiting ✔️</li>
                    <li> Portability ✔️</li>
                </ol>
            </div>    
            </div>
            <div id="maindiv" style={criticalsec}><h3>Critical Section</h3> </div>
            <div style={turnvariable}><h5 id="time">Turn variable: </h5></div>
        </>
    )
}
export default Turn