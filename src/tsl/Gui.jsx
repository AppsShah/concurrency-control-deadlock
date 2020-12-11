import React from 'react'
import Card from 'react-bootstrap/Card'




const cardstyle={
    margin: '2rem',
    width: '70rem',
    // border: "0.2rem solid black",
    boxShadow: '0.2rem 0.2rem 0.2rem 0.2rem grey',
    backgroundColor: "",
    color: 'black',
    fontFamily:'Roboto, sans-serif',

}
const btnstyle={
    margin: '1rem',
    width: '7rem',
    height: '7rem',
    backgroundColor: '#e7e7e7',
    borderRadius: '1rem',
}
const divstyle={
    width: '70rem',
    // border: '0.1rem soli',
    margin: '2rem',
    boxShadow: '0.2rem 0.2rem 0.2rem 0.2rem grey',
    fontFamily:'Roboto, sans-serif',
    fontWeight: 'bold',
    borderRadius: '0.5rem'
    
}
let lock=1;
function process(event){
    const   idn = event.target.id;
    const pro=document.getElementById(idn);
    const time=Math.floor(Math.random()*10000);
    const timetodisplay=time/1000;
    document.getElementById("time").innerHTML="This Process Take "+timetodisplay+"Sec"
    if(lock!==0)
    {
        // console.log(lock)
        lock=1;
        document.getElementById("criticalsectiondiv").appendChild(pro);
        // console.log(lock)
         setTimeout(function(){ 
        // alert("Hello"); 
        lock=1;
        // console.log(lock)
        document.getElementById("time").innerHTML=""
         document.getElementById("backdiv").appendChild(pro);
     }, time);
//    0=false 1=true
        lock=0;
    }
    else
    {
        alert("1 process is using critical section")
    }
    //lock=1;
   // console.log(lock)
}

function Gui(){
    // try {
    //     document.getElementById("p1").onclick=process
    // document.getElementById("p2").onclick=process
    // document.getElementById("p3").onclick=process
    // document.getElementById("p4").onclick=process
    // } catch (error) {
        
    // }
    
    return(
        <>
        <Card style={cardstyle} id="backdiv">
            <Card.Body>
                <Card.Title>No of process</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <button style={btnstyle} onClick={process} id="p1">P1</button>
                <button style={btnstyle} onClick={process} id="p2">P2</button>
                <button style={btnstyle} onClick={process} id="p3">P3</button>
                <button style={btnstyle} onClick={process} id="p4">P4</button>
            </Card.Body>
        </Card>
        <h3 style={{margin: "2rem"}}>Critical section</h3>
        <h3 id="time" style={{margin: '2rem'}}> </h3>
        <div style={divstyle} id="criticalsectiondiv">
        
        </div>
        
       
    </>
    );
}
export default Gui