import React from 'react'         
import './bsem.css'
let sema = new Semaphore(1);

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
    let processes=document.getElementById("tx2").value;

    async function test(id) {
            console.log("Queuing");
            createQueue(id);
        try {
        await sema.acquire();
        console.log('running task', id);
        let deletequeue=document.getElementById("deletequeue");
        deletequeue.remove();
        createRun(id);
        setTimeout(() => {
        sema.release();
        console.log('task finished : ', id);
        let deleterun=document.getElementById("deleterun");
        deleterun.remove();
        createFinish(id);
        }, 2000);
        } catch (e) {
        console.error(id, e);
        }
    }

    for(var i=1;i<=processes;i++)
    {
        test(i);
    }
      //  document.getElementById("tx2").disable=false;         
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
        border: "0.2rem solid black",
        margin: "2rem",
    }
    const cardstyle={
        width: "20rem",
        margin: "2rem"
    }
function Bsem(){
    return(
        <>
            <div class="card text-white bg-dark mb-3" style={cardstyle}>
  <div class="card-header">Binary Semaphore</div>
  <div class="card-body">
    <h5 class="card-title">Enter the number of process</h5>
    <input type="number" id="tx2" style={{margin: "1rem"}}/>
    <button id="btn" onClick={get_value} style={{margin: "1rem", borderRadius: "0.2rem"}}>Submit</button>
        <button onClick={clearall}>clear</button>
  </div>
</div>
		<div id="qdiv" style={divstyle}>Queue State</div>
        <div id="rdiv" style={divstyle}>Running state</div>
        <div id="fdiv" style={divstyle}> Finish state</div>
        </>
    )
}
export default Bsem