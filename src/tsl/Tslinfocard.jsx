import React from 'react';
import Card from 'react-bootstrap/Card';
function Tslinfocard(){
    const style={
        width: '70rem',
        height: 'auto',
        backgroundColor: 'white',
        border: '0.2rem solid white',
        marginLeft: '2rem',
        marginTop:  '2rem',
        boxShadow: '0.2rem 0.2rem 0.2rem 0.2rem grey',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '1.5rem',
        padding: '0.2rem'
    }
    return(
        <>
        <Card style={style}>
  <Card.Body >
    <Card.Title style={{fontWeight: "bold"}}>Lock Variable Synchronization Mechanism</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">TSL(Test And Set Lock)</Card.Subtitle>
    <Card.Text>
    <p>A lock variable provides the simplest synchronization mechanism for processes. Some noteworthy points regarding Lock Variables are-
    </p>
    <ol>
    <li>Its a software mechanism implemented in user mode, i.e. no support required from the Operating System.</li> 
    <li>Its a busy waiting solution (keeps the CPU busy even when its technically waiting).</li> 
    <li>It can be used for more than two processes.</li> 
    </ol>

When Lock = 0 implies critical section is vacant (initial value ) and Lock = 1 implies critical section occupied.

The pseudocode looks something like this –
<Card style={{ width: '60rem', backgroundColor: 'rgb(200, 200, 200)',borderRadius: '1rem',margin: "0.2rem"}}>
  <Card.Body>
    <Card.Text>
        <p>Entry section - while(lock != 0);</p>
        <p>       Lock = 1;     </p>
        <p>//critical section  </p>
Exit section - Lock = 0;
    </Card.Text>
  </Card.Body>
</Card>
Here we can see a classic implementation of the reader-writer’s problem. 
The buffer here is the shared memory and many processes are either
trying to read or write a character to it.
 <p>
 To prevent any ambiguity of data we restrict concurrent access by
  using a lock variable. We have also applied a constraint on the
   number of readers/writers that can have access.
 </p>
   <p>Now every Synchronization mechanism is judged on the basis of three primary parameters :</p>
    <ol className="list">
        <li>Mutual Exclusion.</li>
       <li> Progress.</li>
       <li> Bounded Waiting.</li>
    </ol>

<p>
Of which mutual exclusion is the most important of all parameters.
 The Lock Variable doesn’t provide mutual exclusion in some cases.
  This fact can be best verified by writing its pseudo-code in the 
  form of an assembly language code as given below.
</p>
<Card style={{ width: '60rem', backgroundColor: 'rgb(200, 200, 200)',borderRadius: '1rem' , margin: "0.2rem"}}>
  <Card.Body>
    <Card.Text>
        <ol>
    <li>Load Lock, R0 ; (Store the value of Lock in Register R0.)</li>
 <li>CMP R0, #0 ; (Compare the value of register R0 with 0.)</li>
<li> JNZ Step 1 ; (Jump to step 1 if value of R0 is not 0.)</li>
 <li>Store #1, Lock ; (Set new value of Lock as 1.)</li>
<li>Enter critical section</li>
 <li>Store #0, Lock ; (Set the value of lock as 0 again.)</li>
        </ol>
    </Card.Text>
  </Card.Body>
</Card>

<p>Now let’s suppose that processes P1 and P2 are competing for Critical Section and their sequence of execution be as follows (initial alue of Lock = 0) –</p>
<ol>  
<li>P1 executes statement 1 and gets pre-empted.</li>
<li>P2 executes statement 1, 2, 3, 4 and enters Critical Section and gets pre-empted.</li>
<li>P1 executes statement 2, 3, 4 and also enters Critical Section.</li>
</ol>
<Card.Link href="https://www.geeksforgeeks.org/lock-variable-synchronization-mechanism/">Article Link</Card.Link>
    </Card.Text>
  </Card.Body>
</Card>
        </>
    )
}
export default Tslinfocard