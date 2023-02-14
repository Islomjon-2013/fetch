import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const[fake,setFake]=useState([])
  useEffect(()=>{
    faceStore()
  },[])

  const faceStore = async()=>{
    const response=await fetch(" https://fakestoreapi.com/products")
    console.log(response)
    const jsonData=await response.json()
    setFake(jsonData)
  }


  return (
    <>
<h2>Fake API store</h2>
<div className="container">
  {fake.map((v)=>{
    return(
      <>
<div className="box">
<div className="content">
  <h5>{v.title}</h5>
  <p>{v.description}</p>
</div>
<img src={v.image} alt="" />
</div>
      
      </>
    )
  })}


</div>
    </>
  );
}

export default App;
