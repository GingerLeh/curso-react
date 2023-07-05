const TemplateExpressions = ()=>{

    const name = "Alessa";
    const data = {
        age: 26,
        job:"Programmer",
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{console.log("Exemplo para console.log")}</p>
        </div>
    );
};
export default TemplateExpressions