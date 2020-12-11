import React from 'react'
import Table1 from './tables/Table1'
const heading={
    textAlign: "center",
    backgroundColor: "aqua"
}
function Banker(){
    return(
        <>
        <h1 style={heading}>Banker's Algorithm</h1>
        <Table1 />
        {/* <Table2 />
        <Table3 /> */}
        </>
    )
}
export default Banker