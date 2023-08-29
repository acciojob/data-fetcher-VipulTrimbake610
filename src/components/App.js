
import React, { useEffect, useState } from "react";
import './../styles/App.css';
// import { data } from "cypress/types/jquery";


const App = () => {
  let [arr,setArr] = useState();
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(response=>response.json())
    .then(data=>setArr(data.products))
    .catch(err=>console.log(err))
},[])
  return (
    <div>
      <h1>Data Fetched from API</h1>
       <pre>
        {JSON.stringify(arr)}
       </pre>
    </div>
  )
}

export default App
