import React from 'react'
import Table from 'react-bootstrap/Table'
import Card from  'react-bootstrap/Card'
import Button from  'react-bootstrap/Button'
// import {Alert} from 'react-bootstrap'
const table1={
    width: "50%",
    margin: "1rem",
    border: "0.3rem solid black"
}
const infocard={
    width: "38%",
    float: "right",
    margin: "1rem",
    border: "0.1rem solid black",
    fontSize: "1.2rem",
    // padding: "0.2rem"
    
}
const table={
  width: "50%",
  margin: "1rem",
  border: "0.3rem solid black"
}
const smalltable={
  width: "35%",
  float: "right",
  margin: "1rem",
  // border: "0.3rem solid black",
  fontSize: "1rem",
  // padding: "0.2rem"
  
}
let idarr=[0,0,0,0,0,0,0,0,0]
let alloarr=[0,0,0,0,0,0,0,0,0]
let sysmax=[0,0,0]
let avail=[0,0,0]
let currentneed=[0,0,0,0,0,0,0,0,0]
function autofill(){
  idarr[1]=7
  idarr[2]=5
  idarr[3]=3
  idarr[4]=3
  idarr[5]=2
  idarr[6]=2
  idarr[7]=9
  idarr[8]=0
  idarr[9]=2
  alloarr[1]=0
  alloarr[2]=1
  alloarr[3]=0
  alloarr[4]=2
  alloarr[5]=0
  alloarr[6]=0
  alloarr[7]=3
  alloarr[8]=0
  alloarr[9]=2
  sysmax[1]=10
  sysmax[2]=5
  sysmax[3]=7
  for(let i=0;i<idarr.length;i++)
  {
    try {
      let temp2=`a${i}`
      let temp=`m${i}`;
    let ids=document.getElementById(temp);
    let ids2=document.getElementById(temp2);
    ids.value=idarr[i]
    ids2.value=alloarr[i];
    } catch (error) {
      
    }
  }
  for(let j=0;j<sysmax.length;j++)
  {
    try {
      let temp3=`max${j}`
      let ids3=document.getElementById(temp3)
      ids3.value=sysmax[j]
    } catch (error) {
      
    }
  }
}
function giveid(){
      for(let i=0;i<idarr.length;i++)
      {
        try {
          let allo=`a${i+1}`
          let maxneed=`m${i+1}`
        let data=parseInt(document.getElementById(maxneed).value)
        let allodata=parseInt(document.getElementById(allo).value)
        // document.getElementById(temp).innerHTML=data
        idarr[i]=data
        alloarr[i]=allodata
        } catch (error) {
          
        }
      }
      for(let j=0;j<sysmax.length;j++)
      {
        try {
          let systemmax=`max${j+1}`
          sysmax[j]=parseInt(document.getElementById(systemmax).value)
        } catch (error) {
          
        }
      }
      // console.log(idarr)
      // console.log(alloarr)
      // console.log(sysmax)
      avail[0]=sysmax[0]-(alloarr[0]+alloarr[3]+alloarr[6])
      avail[1]=sysmax[1]-(alloarr[1]+alloarr[4]+alloarr[7])
      avail[2]=sysmax[2]-(alloarr[2]+alloarr[5]+alloarr[8])
      for(let i=0;i<currentneed.length;i++)
      {
        currentneed[i]=idarr[i]-alloarr[i]
      }
      // console.log(currentneed)
      // console.log(avail)
     
      document.getElementById("currentneed").rows[2].cells[1].innerHTML=currentneed[0]
      document.getElementById("currentneed").rows[2].cells[2].innerHTML=currentneed[1]
      document.getElementById("currentneed").rows[2].cells[3].innerHTML=currentneed[2]
      document.getElementById("currentneed").rows[3].cells[1].innerHTML=currentneed[3]
      document.getElementById("currentneed").rows[3].cells[2].innerHTML=currentneed[4]
      document.getElementById("currentneed").rows[3].cells[3].innerHTML=currentneed[5]
      document.getElementById("currentneed").rows[4].cells[1].innerHTML=currentneed[6]
      document.getElementById("currentneed").rows[4].cells[2].innerHTML=currentneed[7]
      document.getElementById("currentneed").rows[4].cells[3].innerHTML=currentneed[8]
      for(let i=0;i<3;i++)
      {
        document.getElementById("availabletable").rows[2].cells[i].innerHTML=avail[i]
      }
      let processarray=["p1","p2","p3"];
      let getprocess=["","",""]
      let f1=0
      let inc=0
      for(let j=0;j<3;j++)
      { 
        // console.log("run")
        for(let i=0;i<3;i++)
        {
          // console.log("run inside")
          if(avail[0]>=currentneed[f1] && avail[1]>=currentneed[f1+1] && avail[2]>=currentneed[f1+2])
        {
            // console.log(f1)
            if(processarray[i]!=="0")
            {
              // console.log(currentneed[f1],currentneed[f1+1],currentneed[f1+2])
              avail[0]+=currentneed[f1]
              avail[1]+=currentneed[f1+1]
              avail[2]+=currentneed[f1+2]
              // console.log(avail)
              getprocess[inc]=processarray[i]
              processarray[i]="0"
              inc++
            }
        }
            f1=f1+3
            if(f1>8)
            {
              f1=0
            }
        }
      }
        let count=0;
        let seq=document.getElementById("finalcheck")
        for(let i=0;i<processarray.length;i++)
        {
          if(processarray[i]!=="0")
          {
            // console.log("not safe chance of deadlock")
            count++;
          }
          else
          {
            // console.log("safe",getprocess)
          }
        }
        if(count===0)
        {
          // console.log("getprocess",getprocess)
          
          seq.innerHTML=`Its Safe Sequence ${getprocess}`
          // console.log("processarray",processarray)
        }
        else
        {
          seq.innerHTML="Its not safe chances of occuring deadlock"
          // console.log("deadlock")
          // <Alert>Chances Of Deadlock</Alert>
        }
}
function Table1(){
    return(
        <>
        <div>
          {/* information card */}
        <Card style={infocard} variant="dark">
        <Card.Title style={{textAlign: "center",border: "0.1rem solid black,",borderRadius:"0.3rem"}}>Information Card</Card.Title>
        <Card.Body>Here R1 - R2 - R3 are the Three Resources Resource1
        Resource2 Resource3 it can be anything like Memory💽,CPU🖥️,Printer🖨️,etc
        Here P1 - P2 - P3 are the Three Processes Process1
        Process2 Process3
        {/* <p> Use Autofill Button </p> */}
        </Card.Body></Card>
        {/* available table */}
        <Table striped bordered hover variant="dark" style={table}>
  <thead>
      <tr>
      <th colSpan="4" style={{textAlign: "center"}}>Allocation</th>
      </tr>
    <tr>   
      <th></th>
      <th>R1</th>
      <th>R2</th>
      <th>R3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>P1</td>
      <td><input type="number"style={{width: "3rem"}} id="a1"/></td>
      <td><input type="number"style={{width: "3rem"}} id="a2"/></td>
      <td><input type="number"style={{width: "3rem"}} id="a3" /></td>
    </tr>
    <tr>
      <td>P2</td>
      <td><input type="number"style={{width: "3rem"}} id="a4"/></td>
      <td><input type="number"style={{width: "3rem"}} id="a5"/></td>
      <td><input type="number"style={{width: "3rem"}} id="a6"/></td>
    </tr>
    <tr>
      <td>P3</td>
      <td><input type="number"style={{width: "3rem"}} id="a7"/></td>
      <td><input type="number"style={{width: "3rem"}} id="a8"/></td>
      <td><input type="number"style={{width: "3rem"}} id="a9"/></td>
    </tr>
  </tbody>
</Table>
        </div>
        <Table striped bordered hover variant="dark" style={smalltable} id="availabletable">
          
  <thead>
      <tr>
      <th colSpan="4" style={{textAlign: "center"}}>Available</th>
      </tr>
    <tr>   
      <th>R1</th>
      <th>R2</th>
      <th>R3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
<Table striped bordered hover variant="dark" style={table1}>
          {/* Maxneed table */}
  <thead> 
      <tr>
      <th colSpan="4" style={{textAlign: "center"}}>Max Need</th>
      </tr>
    <tr>   
      <th></th>
      <th>R1</th>
      <th>R2</th>
      <th>R3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>P1</td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m1" /></td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m2"/></td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m3"/></td>
    </tr>
    <tr>
      <td>P2</td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m4" /></td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m5"/></td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m6"/></td>
    </tr>
    <tr>
      <td>P3</td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m7" /></td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m8" /></td>
      <td><input max="10" min="0" type="number"style={{width: "3rem"}} id="m9" /></td>
    </tr>
  </tbody>
</Table>
        {/* system max table */}
<Table striped bordered hover variant="dark" style={smalltable}>
  <thead>
      <tr>
      <th colSpan="4" style={{textAlign: "center"}}>System Max</th>
      </tr>
    <tr>   
      <th>R1</th>
      <th>R2</th>
      <th>R3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="number"style={{width: "3rem" }} id="max1"/></td>
      <td><input type="number"style={{width: "3rem" }} id="max2"/></td>
      <td><input type="number"style={{width: "3rem" }} id="max3"/></td>
    </tr>
  </tbody>
          {/* current table */}
</Table>
        <Table striped bordered hover variant="dark" style={table1} id="currentneed">
  <thead>
      <tr>
      <th colSpan="4" style={{textAlign: "center"}}>Current Need</th>
      </tr>
    <tr>   
      <th></th>
      <th>R1</th>
      <th>R2</th>
      <th>R3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>P1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>P2</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>P3</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
        <Button onClick={autofill} variant="dark" style={{width: "10rem",margin: "2%",marginLeft: "25%"}}>AutoFill</Button>
        <Button onClick={giveid} variant="dark" style={{width: "10rem",margin: "2%",marginLeft: "25%"}}>Submit</Button>
        <h1 id="finalcheck"style={{textAlign: "center",padding: "0.2rem",background: "aqua"}}></h1>
        </>
    )
}
export default Table1