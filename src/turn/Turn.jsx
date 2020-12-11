import React from 'react'
import Card from 'react-bootstrap/Card'
let i="i"
let j="j"
let turn=i;
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
    margin: "2%"
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
const table={
    border: "0.2rem solid black",
    marginLeft: "20%"
}
function critical(event)
{
        let button=document.getElementById(event.target.id)
        let btndata=button.innerHTML
        let criticalsection=document.getElementById("maindiv")
        let buttondiv=document.getElementById("buttondiv")
        let time=document.getElementById("time")
        // turn=true
        if(turn===i)
        {   
            turn=j
            time.innerHTML=`Turn variable: ${btndata}`
            setTimeout(()=>{
                setTimeout(()=>{
                        buttondiv.appendChild(button)
                        // console.log(turn)
                        turn=i
                        time.innerHTML=`Turn variable: ${btndata}`
                },5000)
                criticalsection.appendChild(button)
                // criticalsection.remove(button)
            },1000)
        }
        else
        {
            alert("Critical section not available")
        }
        time.innerHTML="Turn variable:"
}
function Turn(){
    return(
        <>
            <h1 style={heading}>Turn Variable</h1>
            <table style={table}>  
                <tr>
                    <th style={{padding: "2rem"}}>
                    <div id="buttondiv">
            <button id="button1" onClick={critical} style={buttons}> Process i</button>
            {/* <button id="button2" onClick={critical} style={buttons}> Process 2</button> */}
            {/* <button onClick={clearInterval(stop)}>stop</button> */}
            </div>
                    </th>
                    <th>
                    <div id="buttondiv">
            {/* <button id="button1" onClick={critical} style={buttons}> Process 1</button> */}
            <button id="button2" onClick={critical} style={buttons}> Process j</button>
            {/* <button onClick={clearInterval(stop)}>stop</button> */}
            </div>
                    </th>
                    <th>
                    <Card style={{ width: '18rem',margin: '2rem' }}>
  <Card.Body>
    <Card.Title>Information Card</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Turn Variable</Card.Subtitle>
    <Card.Text>
        {/* <p>Turn Variable or Strict Alternation Approach</p> */}
    Turn Variable or Strict Alternation Approach is the software mechanism implemented at user mode. It is a busy waiting solution which can be implemented only for two processes. In this approach, A turn variable is used which is actually a lock.
    </Card.Text>
    <Card.Link href="https://www.javatpoint.com/os-turn-variable-or-strict-alternation-approach">More Info</Card.Link>
    {/* <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
                    </th>
                    <th>
                    <div style={{margin: "1rem",border: "0.2rem solid black"}}>
                <ol>
                    <li> Mutual Exclusion ✔️</li>
                    <li> Process ❌</li>
                    <li> Bound Waiting ✔️</li>
                    <li> Portability ✔️</li>
                </ol>
            </div>
                    </th>
                </tr>
            </table>
            <div id="maindiv" style={criticalsec}><h3>Critical Section</h3> </div>
            <div style={turnvariable}><h5 id="time">Turn variable: </h5></div>

        </>
    )
}
export default Turn