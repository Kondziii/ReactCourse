import { useState } from 'react';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

const usersList = [];

const App = () => {
  const [users, setUsers] = useState(usersList);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    console.log(users);
  };

  return (
    <>
      <UserForm onAddUser={addUser}></UserForm>
      <UsersList users={users}></UsersList>
    </>
  );
};

export default App;
