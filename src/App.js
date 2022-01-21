import Child1 from './components/child1';
import {useState} from 'react';

function App() {
  //state
  let [user,Setuser]=useState({
    id:3248,
    name:'prudvish',
    city:'hyderabad'
  })
  let [child1Data,setchild1Data]=useState('')
  const getData=(data)=>{
    console.log('data got is',data)
    setchild1Data(data)
  }
  // const getData(data)=>{
  //   console.log(data)
  // }
 // return react element

  return (
<>
  <h3>data i got from  {user.name} is {child1Data}</h3>
   <Child1 user={user} getData={getData}></Child1>
   </>

 
 )

}

export default App;
