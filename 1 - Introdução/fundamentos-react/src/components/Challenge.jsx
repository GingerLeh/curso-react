const Challenge = ()=>{
    const numero1 = 10;
    const numero2 = 15;


    const handleSoma = () =>{
        console.log(numero1+numero2)
    }
    return(
        <div>
            <h1>Primeiro numero:{numero1}</h1>
            <h1>Segundo numero:{numero2}</h1>
            <button onClick={handleSoma}>Soma dos dois:</button>
        </div>
        
    )
};
export default Challenge