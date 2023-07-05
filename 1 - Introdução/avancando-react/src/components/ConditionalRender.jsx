import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("Alessa");
  
    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true sim!</p>}
        {!x && <p>Se x for false sim!</p>}
        <h1>If ternário</h1>
        {name === "Alessa" ? (
            <div>
                <p>O nome é Alessa</p>
            </div>
        ):(
            <div>
                <p>O nome não foi encontrado</p>
            </div>
        )}
        <button onClick={()=>setName("Matheus")}>Mudar nome</button>

    </div>

  )
}

export default ConditionalRender