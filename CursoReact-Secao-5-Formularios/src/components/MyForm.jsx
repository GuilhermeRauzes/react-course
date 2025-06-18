import "./MyForm.css";
import { useState } from "react";
const MyForm = ({ user }) => {
  //6 - Controlled Inputs
  
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o form");
    console.log(name, email, bio, role);

    //Situação normal:

    //validacao
    //envio

    //7 - Limpar form

    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 5- Envio de form */}

      {/* 1- Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2- Label envolvendo o Input*/}

        <label>
          <span>E-mail:</span>
          {/* 4- Simplificação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - TextArea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="Bio"
            placeholder="Fale sobre você:"
            onChange={(event) => setBio(event.target.value)}
            value={bio}
          ></textarea>
        </label>
        <input type="submit" value="Enviar" />
        {/* 9- Select */}
        <label>
          <span>Função no sistema: </span>
          <select name="role" onChange={(event) => setRole(event.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
      </form>
    </div>
  );
};
export default MyForm;
