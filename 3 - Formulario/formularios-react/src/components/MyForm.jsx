import { useState } from "react";
import style from "./MyForm.module.css";

const MyForm = ({user}) => {
    //6 - controlled input
    //3 - gerenciamento de dados

    const [name, setName]= useState(user?user.name:"");
    const [email, setEmail]= useState(user?user.email:"");
    const [bio, setBio] = useState();
    const [role, setRole] = useState();
    const handleName = (e) => {
        setName(e.target.value)
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando form");
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);

        // 7 - Limpar os forms
        setEmail("")
        setName("")
        setBio("")
        setRole("")

    }



  return (
    <div>

        {/*5 - Envio de form */}
        {/*1 - Criação do form */}
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite seu nome aqui:" 
                onChange={handleName} 
                value={name}/>
            </div>
            <div>
                {/*2 - Label envolvendo o input */}
                <label>
                    <span>Email:</span>
                    {/*4- Simplificação de manipulação de state */}
                    <input 
                    type="email" 
                    placeholder="Digite seu email aqui..." 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}/>
                </label>
            </div>
            {/*8 - Textarea */}
            <div>
                <label>
                    <span>Bio:</span>
                    <textarea 
                    name="bio"
                    placeholder="Digite sua biografia..." 
                    onChange={(e)=>setBio(e.target.value)}
                    value={bio}
                    ></textarea>
                </label>
            </div>
            <div>
                 {/*9 - Select */}
                 <label>
                    <span>Função no sistema</span>
                    <select 
                    name="role"
                    value={role}
                    onChange={(e)=>setRole(e.target.value)}
                    >
                        <option value="admin">Administrador</option>
                        <option value="editor">Editor</option>
                        <option value="funcionario">Funcionario</option>
                    </select>
                 </label>
            </div>
            <input type="submit" value="Enviar"/>
            
        </form>
               

    </div>
  )
}

export default MyForm