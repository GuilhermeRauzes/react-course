const UserDetails = ({name, age, workTitle}) => {
  return(
    <div>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Função: {workTitle}</li>
      </ul>
      {age >= 18 ? (<p>Pode tirar a carteira de habilitação!</p>) : (<p>Não pode tirar a carteira de habilitação!</p>)}
    </div>
    
  )
  
}

export default UserDetails;