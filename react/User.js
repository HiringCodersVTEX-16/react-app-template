import React, { useEffect, useState } from 'react';

import styles from './styles.css';


//Listagem dos leads
const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    //const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('https://9omhprzx4i.execute-api.sa-east-1.amazonaws.com/leads');
    const users = await response.json();
    setUsers(users.Items);
  }

  return (
    <table>
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>E-mail</th>
      <th>Telefone</th>
      <th>É cliente</th>
  </tr>
      {users.map(user => (
        <tr>
          <td>{user.id}</td>
          <td>{user.nome}</td>
          <td>{user.email}</td>
          <td>{user.telefone}</td>
          <td>{String(user.cliente)}</td>
        </tr>
      ))}
    </table>
  );
};

export default User;
