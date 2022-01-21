import {useEffect,useState} from 'react'
import axios from 'axios'

function Useeffectdemo(){
//state
let [users,setUsers]=useState([])


useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>setUsers(response.data))
    .catch(err=>console.log(err))
},[])


    return(
     
      <div className='container text-center'>
          {users.length===0 && <p className='display-1 mt-4'>nooo data</p>}

          { users.length!==0 && 
              
          users.map((userObj) => 
          

          
          <h3 key={userObj.id} className='text-info'>
            {userObj.id}
              </h3>
          
          )
          

}

      </div>
    )
}
export default Useeffectdemo;