import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Alessa");
  const redTitle = true;
  
  return (
    <>
      {/*Css global*/}
      <h1>React com css</h1>
      {/*Css de componente*/}
      <MyComponent/>
      <p>Esse é do App</p>
      {/*Inline Css */}
      <p style={{color:'magenta',padding:"25px", borderTop:"2px solid red"}}>Este paragrafo foi estilizado de forma inline</p>
      {/*Css inline dinamico*/}
      <h2 style={n > 10 ? {color:"red", background:"black"}: {color:"white", background:"black"}}>Estilo inline dinamico</h2>
      <h2 style={name === "Alessa"? {color: "blue", background:"pink"}:{color:"white", background:"black"}}>Exibindo o nome: {name}</h2>
      {/* Classe dinamica */}
      <h2 className={redTitle? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>
      {/*Css modules */}
      <Title/>
    </>
  )
}

export default App
