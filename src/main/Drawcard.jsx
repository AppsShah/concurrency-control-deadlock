import React from 'react'
//import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
const cardstyle={
  width: '18rem',
  fontSize: "larger",
  margin: "0.2cm",
  marginTop: "0.2cm",
  backgroundColor: "rgb(41,42,44)",
  color: "aqua",
  boder: "2px solid black",
 // float: "left",
}
function Drawcard(props){
    return(
        <>
        <Card style={cardstyle} className="card">
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.topic}</Card.Subtitle>
    <Card.Text>
        {props.dis}
    </Card.Text>
    <a href={props.cardlink}>Card Link</a>
  </Card.Body>
</Card>
        </>
    )
}
export default Drawcard