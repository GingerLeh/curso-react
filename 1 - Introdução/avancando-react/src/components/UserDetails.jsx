const UserDetails = ({users}) => {

    

  return (
    <div>
        <h1>Detalhes dos usuários (desafio)</h1>

        {users.map((user)=>(
            <div key={user.id}>
                <p>Nome:{user.nome}</p>
                <p>Profissao:{user.profissao}</p>
                <p>Idade:{user.idade}</p>
               {user.idade > 18? (
                <p>Maior de idade, pode tirar habilitação</p>
               ):(
                <p>Menor de idade, não pode tirar habilitação</p>
               )}
            </div>
            
        ))}
    </div>
  )
}

export default UserDetails