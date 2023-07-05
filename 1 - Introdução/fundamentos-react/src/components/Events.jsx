const Events = () =>{

    const handleMyEvent = ()=>{
        console.log("Ativou o evento!")
    }

    const renderSomething = (x) => {
        if(x){
            return(
                <h1>Renderizou o true</h1>
            )
        }
        else{
            return(
                <h1>Renderizou o false</h1>
            )
        }
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!!</button>
            </div>
            <div>
                <button onClick={()=> console.log("Ativou")}>Clique aqui também!!</button>
            </div>
            {renderSomething(false)}
            {renderSomething(true)}
        </div>
    )
};
export default Events;