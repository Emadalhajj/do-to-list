
import  {React, createContext, useRef, useState } from 'react';
import { ReactDOM } from 'react';



function App() {
  
 let [x , xset] = useState([])
//  const complet = false;
 const inputref = useRef()
 const add = ()=>{
   
   const value = inputref.current.value
   const newdata = {complet:false , value}
  // console.log(value);
  xset([...x , newdata])
  inputref.current.value =""

 }
 const itemdone = (index) =>{
  const newx = [...x] // or x.slice() for get a new copy of x 
  x[index].complet = !x[index].complet
  xset(newx)
 }
const todelete = (index)=>{
const newx = [...x]

newx.splice(index,1)
xset(newx)

}
  return <div className='App'>
  
    <h2> To Do List</h2>
    <ul>
      {
        x.map(({value ,complet}, index)=>{
        return <div className='main'>
        <li className={complet ? "diffstyle":""} onClick={()=> itemdone(index)}>{value}</li> 
            <span onClick={()=> todelete(index)}>X</span>
        </div> //item.value for select value becuse thare many items
        })
      }
    </ul>
    
    <input ref={inputref} placeholder='Emter new task'></input>
    <button onClick={add}>Add</button>
  </div>
  
}

export default App;
