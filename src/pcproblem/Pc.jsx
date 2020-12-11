import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const header={
    width: "auto",
    border: "0.2rem solid black",
    textAlign: "center",
    backgroundColor: "aqua"
}
const card={
    width: "auto",
    backgroundColor: "rgb(41,41,44)",
    color: "white",
    margin: "2rem",
}
const button={
    width: "30%",
    height: "5rem",
    marginLeft: "12.5%",
    textAlign: "center",
    // border: "o.1rem solid black"

}
const buffer={
    width: "15%",
    height: "2rem",
    margin: "1rem",
    textAlign: "center",
    border: "0.2rem solid aqua",
    color: "white",
    // float: "left"
}
const variable={
   width: "20%",
    height: "2rem",
    margin: "1rem",
    textAlign: "center",
    border: "0.2rem solid aqua",
    color: "white",
    float: "left"
}
let ids=0
let arr=['a','a','a','a','a','a'];
let full=0
let Empty=6;
let count=0;
function produce()
{
  const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let rand=Math.floor(Math.random()*100)
  let char=rand%26;
  let data=alpha.charAt(char);
  
  // console.log(count)
  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]!=='a')
      {
        count=count+1
      }

  }
  //  console.log(count)
   full=count
  //  console.log(full,count)
  if(full<6)
  {
    const h3=document.createElement("h3")
  const buffers=document.getElementById("buffer");
  h3.innerHTML=data;
  h3.style={buffer}
  let ID=h3.id=`p${ids}`
  buffers.appendChild(h3)
  arr.splice(ids,1,ID)
  // console.log(arr)
  full=ids+1
  Empty=Empty-1;
  let checkf=document.getElementById("checkfull");
  checkf.innerHTML=`Full : ${count+1}`
  let checke=document.getElementById("checkempty");
  checke.innerHTML=`Empty : ${Empty}`
  // console.log("full"+full,"empty"+Empty)
  ids=ids+1;
  }
  else{
    alert("only 6 value")
  }
  count=0;
}
// console.log(full,count)
let index=0;
function consume()
{
  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]!=='a')
      {
        count=count+1
      }

  }
    if(Empty<6)
    {
      let d=arr.splice(index,1)
    index=index+1;
    full=full-1
    Empty=Empty+1
    // checkdata=6-full;
    let checkf=document.getElementById("checkfull");
  checkf.innerHTML=`Full : ${count-1}`
  let checke=document.getElementById("checkempty");
  checke.innerHTML=`Empty : ${Empty}`
    // console.log("full"+full,"empty"+Empty)
    index=index-1
  //  try {
    let consumedata= document.getElementById(d)
    consumedata.remove();
  //  } catch (error) {
     
  //  }
    }
    else
    {
      alert("no more data available")
    }
    count=0
}
// try {
//   let checkf=document.getElementById("checkfull");
//    checkf.innerHTML+=` : ${full}`
// } catch (error) {
  
// }
function Pc(){
        return(
            <>
            <div style={header}>
                <h3>Producer Consumer Problem</h3>
            </div>
            <Card border="aqua" style={card}>
    <Card.Header>Producer & Consumer Problem</Card.Header>
    <Card.Body>
      <Card.Title>What Is The Problem ? </Card.Title>
      <Card.Text style={{margin: "1rem"}}>
      We have a buffer of fixed size. A producer can produce an item and can place in the buffer. 
      A consumer can pick items and can consume them. We need to ensure that when a producer is placing an
       item in the buffer, then at the same time consumer should not consume any item. In this problem, buffer is the critical section.
      </Card.Text>
      <a href="https://www.geeksforgeeks.org/producer-consumer-problem-using-semaphores-set-1/">Refrence Link</a>
    </Card.Body>
  </Card>
            
  <Card border="aqua" style={card}>
    <Card.Header>Producer & Consumer Problem</Card.Header>
    <Card.Body>
      <Card.Title>How To Solve ? </Card.Title>
      <Card.Text style={{margin: "1rem"}}>
      To solve this problem, we need two counting semaphores – Full and Empty. “Full” keeps track of number of items in the buffer at any given time and “Empty” keeps track of number of unoccupied slots.
      </Card.Text>
      <a href="https://www.geeksforgeeks.org/producer-consumer-problem-using-semaphores-set-1/">Refrence Link</a>
    </Card.Body>
  </Card>
  <br />
            <Button variant="success" style={button} onClick={produce}>Producer</Button>
            <Button variant="info"style={button} onClick={consume}>Consumer</Button>


    <Card style={{margin: "2rem",border: "0.2rem solid aqua",backgroundColor: "rgb(41,41,44)"}}>
  <Card.Body>
            <div style={{color: "white"}} id="buffer">Buffer/Memory (Size: 5(0-4))</div>
            {/* <div style={buffer}></div>
            <div style={buffer}></div>
            <div style={buffer}></div>
            <div style={buffer}></div>
            <div style={buffer}></div> */}
            </Card.Body>
</Card>
<Card style={{margin: "2rem",border: "0.2rem solid aqua",backgroundColor: "rgb(41,41,44)"}}>
  <Card.Body>
            <div style={{color: "white"}}>Semaphores (Shared Variable)</div>
          <div style={variable} id="checkfull">Full </div>
            <div style={variable} id="checkempty">Empty </div>
            </Card.Body>
</Card>
            </>
        )
}
export default Pc
