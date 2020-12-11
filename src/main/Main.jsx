import React from 'react'
import './main.css'
import Card from './Drawcard'
// import {Route,Switch} from 'react-router-dom'
// import Bsem from '../Binary/Bsem'
//import Leftarrow from './leftarrow.png'
// import Rightarrow from './rightarrow.png'
//import Leftbtn from './Leftbtn'
// import Straight from './str.png' 
function Main(){
        return(
        <>
        {/* <Switch> */}
                {/* <Route path='/' component={Card} /> */}
        <div className="heading">
                ConCurrency Control & DeadLock                
        </div>
        <div className="flex-container">
        <Card topic="Concurrency control" 
                title="TSL Variable" 
        dis="TSL stands for Test Set Lock Mechanism
        In lock variable mechanism, Sometimes Process reads the old value of lock variable and enters the critical section. Due to this reason, more than one process might get into critical section. However, the code shown in the part one of the following section can be replaced with the code shown in the part two. This doesn't affect the algorithm but, by doing this, we can manage to provide the mutual exclusion to some extent but not completely."
        cardlink="/tsl"
        />
        <Card topic="Concurrency control"
                cardlink="/turn"
                title="Turn Variable"
        dis="Turn Variable or Strict Alternation Approach is the software mechanism implemented at user mode. It is a busy waiting solution which can be implemented only for two processes. In this approach, A turn variable is used which is actually a lock.
        This approach can only be used for only two processes."/>
        <Card topic="Concurrency control" 
                cardlink="/petrson"
                title="Paterson Solution"
        dis="This is a software mechanism implemented at user mode. It is a busy waiting solution can be implemented for only two processes. It uses two variables that are turn variable and interested variable."/>
         <Card topic="Concurrency control" 
                title="Counting Semaphore"
                cardlink="/counting"
        dis="Its value can range over an unrestricted domain. It is used to control access to a resource that has multiple instances. "/>        
                       {/* <tr> */}
        </div>
        <div className="flex-container">
        
        <Card topic="Concurrency control" 
                title="Binary Semaphore"
                cardlink="/binary"
        dis="This is also known as mutex lock. It can have only two values – 0 and 1. Its value is initialized to 1. It is used to implement the solution of critical section problem with multiple processes. "
        
        />

        <Card topic="DeadLock" 
                title="Bankers Algorithm"
                cardlink="/banker" 
        dis="The banker’s algorithm is a resource allocation and deadlock avoidance algorithm that tests for safety by simulating the allocation for predetermined maximum possible amounts of all resources, then makes an “s-state” check to test for possible activities, before deciding whether allocation should be allowed to continue."/>
        <Card topic="Concurrency control"
                cardlink="Pc"
                title="Producer & consumer Problem"
        dis="Problem:
        We have a buffer of fixed size. A producer can produce an item and can place in the buffer. A consumer can pick items and can consume them. We need to ensure that when a producer is placing an item in the buffer, then at the same time consumer should not consume any item. In this problem, buffer is the critical section."/>
                        {/* </tr> */}
        {/* <Bsem /> */}
        </div>
       {/* </Switch> */}
        </>
        )
}
export default Main