import {useState} from 'react';



function Child1(props){

    let [name,setname]=useState('THALA')

 
  

    return(
      <div>
          <h2>HELLO I AM {props.user.name} with my id {props.user.id} </h2>
          <h3>{props.user.city}</h3>
          <button className="btn btn-danger" onClick={()=>props.getData(name)} >click to send data</button>
      </div>
    )
}

export default Child1;