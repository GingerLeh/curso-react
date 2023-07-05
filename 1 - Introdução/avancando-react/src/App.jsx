import { useState } from 'react';
import './App.css'
import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';
function App() {

  // const name = "Alessa";
  const [userName] = useState("Marco");

  const cars = [
    {id:1, brand:"Ferrari", color:"Branco", newCar:false, km:4500},
    {id:2, brand:"Renault", color:"Branco", newCar:true, km:0},
    {id:3, brand:"Kia", color:"Azul", newCar:true, km:0},
  ]

  const user = [
    {id:1, nome: "Alessa", profissao:"Programadora", idade:26},
    {id:2, nome: "Marco", profissao:"Programador", idade:25},
    {id:3, nome: "Joao", profissao:"Designer", idade:32},
]

  function showMessage(){
    console.log("Executando função pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage=(msg)=>{
    setMessage(msg)
  }


  return(
    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagens em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        {/* Props */}
        <ShowUserName name = {userName}/>
        {/* Destructuring */}
        <CarDetails brand="VW" km={100000} color="Vermelho" newCar ={false}/>
        <CarDetails brand="Fiat" km={0} color="Azul" newCar ={true}/>
        <CarDetails brand="Honda" km={4500} color="Vermelho" newCar ={false}/>

        {/* loop em array de objetos */}
        {cars.map((car)=>(
        
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
        )

        )}

        {/* Fragments */}
        <Fragments propFragment = "teste"/>

        {/* children */}
        <Container myValue="teste">
          <p>Testando o children</p>
        </Container>
        <Container myValue="teste2">
          <p>Testando o children diferente do outro</p>
        </Container>

        {/* função como props */}
        <ExecuteFunction myFunction = {showMessage}/>
        {/* State lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>

        {/*desafio do modulo*/}
        <UserDetails users={user}/>

      </div>
    </div>
  )
}

export default App
