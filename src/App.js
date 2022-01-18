
import {useState} from 'react';

function App() {
  //state
  
//   const hello =()=>{
//      console.log("thala")
//   }
//   const hello1 =(a)=>{
//     console.log("thala",a)
//  }
// let [name,setName]=useState('navaneeth')
// const changeName=()=>{
//   setName('prudvish')
// }
let [user,setUser]=useState({
  name:'prudvish',
  city:'karimnagar'
})
const changeName=()=>{
  setUser({...user,name:'rohan',city :'nizambad'})
}


   let users =[
     {
     id:1,
     name:'prudvish',
     city:'karimnagar'
     },
     {
      id:2,
      name:'rohan',
      city:'nizambad'
      },
      {
        id:3,
        name:'likhith',
        city:'luxxerpet'
        },
        {
          id:4,
          name:'pravardhan',
          city:'hyderabad'
          }
   ]
 // return react element
  return (
  //  <div className='text-center'>
  //    <h1 className='text-danger'>hello guys</h1>
  //    <h3 className='text-info'> i am {name}</h3>
  //    <button className='btn btn-success' onClick={hello}> hello </button>
  //    <button className='btn btn-success' onClick={()=> hello1(100)}> hello </button>
  //  </div>
  // <div className='text-center text-info'>
  //   <h1>{name}</h1>
  //   <button className='btn btn-success' onClick={changeName}>click me</button>
  // </div>
//   <div className='text-center text-info'>
//     <h1>{user.name}</h1>
//     <h1>{user.city}</h1>
//     <button className='btn btn-success' onClick={changeName}>click me</button>
//  </div>

  <>
    <div className='text-center text-info'>
        <h1>{user.name}</h1>
        <h1>{user.city}</h1>
        <button className='btn btn-success' onClick={changeName}>click me</button>
     </div>
  
  
<div className='container'>
     <table className='table text-center'>
    <thead>
      <tr>
      <th>
        id
      </th>
      <th>
        name
      </th>
      <th>
        city
      </th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((userObj)=><tr key={userObj.id}>
          <td>{userObj.id}</td>
          <td>{userObj.name}</td>
          <td>{userObj.city}</td>
        </tr>)
      }
    </tbody>
     </table>
</div>
</>

 )

}

export default App;
