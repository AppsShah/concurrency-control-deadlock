import React from 'react'; 
//import Temp from './Temp' 
import './csem.css';   
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/Form'
function Semaphore(max) {
    var counter = 0;
    var waiting = [];
    
    var take = function() {
    if (waiting.length > 0 && counter < max){
        counter++;
        let promise = waiting.shift();
        promise.resolve();
    }
    }
    
this.acquire = function() {
    if(counter < max) {
        counter++
        return new Promise(resolve => {
        resolve();
    });
    } else {
        return new Promise((resolve, err) => {
        waiting.push({resolve: resolve, err: err});
        });
    }
    }

this.release = function() {
    counter--;
    take();
    }
    
this.purge = function() {
    let unresolved = waiting.length;
    
    for (let i = 0; i < unresolved; i++) {
        waiting[i].err('Task has been purged.');
    }
    
    counter = 0;
    waiting = [];
    
    return unresolved;
    }
}

// testing the semaphore

function get_value()
{
    let processes=0
    let max=0
    let sema=null
    try {
    processes=document.getElementById("tx2").value;
    max=document.getElementById("tx1").value;
     sema= new Semaphore(max);
    } catch (error) {
        
    }

    async function test(id) {
        console.log('queueing task', id);
        createQueue(id)
        try {
        await sema.acquire();
        console.log('running task', id);
        try {
            var deletequeue=document.getElementById("deletequeue")
        deletequeue.remove();
        } catch (error) {
            
        }
        createRun(id)
        setTimeout(() => {
        sema.release();
        console.log('task finished : ', id);
        try {
                var deleterun=document.getElementById("deleterun");
                deleterun.remove()
        } catch (error) {
            
        }
        createFinish(id)
        }, 2000);
        } catch (e) {
        console.error(id, e);
        }
    }

    for(var i=1;i<=processes;i++)
    {
        test(i);
    }
                    
}     
function createQueue(id)
{
    let queue=document.createElement("button");
    queue.id="deletequeue"
    let qdiv=document.getElementById("qdiv");
    qdiv.appendChild(queue)
    // document.body.appendChild(queue);
    queue.className="draw";
    try {
        queue.innerHTML=` Queue P${id}`;
    } catch (error) {
        
    }
}
function createRun(id)
{
    let run=document.createElement("button");
    let rdiv=document.getElementById("rdiv");
    rdiv.appendChild(run)
    // document.body.appendChild(run);
    run.className="draw";
    run.id="deleterun"
    try {
        run.innerHTML=` Running P${id}`;
    } catch (error) {
        
    }
}
function createFinish(id)
{
    let fin=document.createElement("button");
    let fdiv=document.getElementById("fdiv");
    fdiv.appendChild(fin)
    // document.body.appendChild(fin);
    fin.className="draw";
    fin.id="deletefin";
    try {
        fin.innerHTML=`Fin P${id}`;
    } catch (error) {
        
    }
}
function clearall(){
    var val=document.getElementById("tx2").value;
    for(let t=0;t<=val;t++)
    {
        try {
            var deletefin=document.getElementById("deletefin");
        deletefin.remove();
        } catch (error) {
            
        }
    }
}
    const divstyle={
        width: "70rem",
        height: "8rem",
        border: "0.2rem black solid",
        margin: "1rem"
    }
    const cardstyle={
        width: "70rem",
        border: "0.2rem solid black",
        margin: "1rem",
        padding: "1rem",
        
    }
function Csem(){
    
    return(
        <>
            <Card style={cardstyle}>
  <Card.Body>
    <Card.Title>Counting Semaphore</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Information Card</Card.Subtitle>
    <Card.Text>
    a semaphore is a nonnegative integer count. Semaphores are typically used to coordinate access to resources, with the semaphore count initialized to the number of free resources.
    </Card.Text>
    <Card.Link href="https://docs.oracle.com/cd/E19455-01/806-5257/sync-34/index.html">Article Link</Card.Link>
    <Card.Link href="https://www.geeksforgeeks.org/semaphores-in-process-synchronization/">Reference Link</Card.Link>
  </Card.Body>
</Card>
<Card style={cardstyle}>
  <Card.Body>
       {/* label */}
  <InputGroup size="sm" style={{margin: "1rem"}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Enter The Value Of Semaphore</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>
        {/* input field */}
          <input type="number" id="tx1" style={{margin: "1rem"}} />
          {/* label */}
          <InputGroup size="sm" style={{margin: "1rem"}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg"> Enter The Number Of Process </InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>
            {/* input field */}
          <input type="number" id="tx2" style={{margin: "1rem"}}/>
        {/* buttons */}
          <Button variant="dark" onClick={get_value} style={{margin: "1rem"}} id="btn">Submit</Button>{' '}
          <Button variant="dark" onClick={clearall} style={{margin: "1rem"}}>clearall</Button>{' '}
  </Card.Body>
</Card>
        {/* <Temp /> */}
        <div id="qdiv" style={divstyle}>Queue State</div>
        <div id="rdiv" style={divstyle}>Running State</div>
        <div id="fdiv" style={divstyle}>Finish State</div>

        </>
    )
}
export default Csem