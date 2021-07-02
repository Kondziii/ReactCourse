// import { useState } from 'react';
// import classes from './UserForm.module.css';
// import Card from './UI/Card';
// import Button from './UI/Button';
// import ErrorModal from './UI/ErrorModal';

// const UserForm = (props) => {
//   const [username, setUsername] = useState('');
//   const [age, setAge] = useState('');
//   const [inputErr, setInputErr] = useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     if (validateFields()) {
//       props.onAddUser({
//         username,
//         age,
//       });
//       setUsername('');
//       setAge('');
//     } else {
//       setInputErr({
//         title: 'Invalid input!',
//         message: 'Check the enetered values because they are not valid',
//       });
//     }
//   };

//   const validateFields = () => {
//     if (username.trim().length === 0 || age.trim().length === 0 || +age <= 0)
//       return false;
//     return true;
//   };

//   return (
//     <>
//       {inputErr && (
//         <ErrorModal
//           title={inputErr.title}
//           message={inputErr.message}
//           onClose={() => setInputErr(null)}
//         ></ErrorModal>
//       )}
//       <Card className={classes.form}>
//         <form onSubmit={addUserHandler}>
//           <div>
//             <label htmlFor='username'>Username</label>
//             <input
//               id='username'
//               type='text'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor='age'>Age(Years)</label>
//             <input
//               id='age'
//               type='number'
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//           </div>
//           <Button type='submit'>Add user</Button>
//         </form>
//       </Card>
//     </>
//   );
// };

// export default UserForm;
import { useState, useRef } from 'react';
import classes from './UserForm.module.css';
import Card from './UI/Card';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';

const UserForm = (props) => {
  const username = useRef();
  const age = useRef();
  const [inputErr, setInputErr] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (validateFields()) {
      props.onAddUser({
        username: username.current.value,
        age: age.current.value,
      });
      username.current.value = '';
      age.current.value = '';
    } else {
      setInputErr({
        title: 'Invalid input!',
        message: 'Check the enetered values because they are not valid',
      });
    }
  };

  const validateFields = () => {
    if (
      username.current.value.trim().length === 0 ||
      age.current.value.trim().length === 0 ||
      +age.current.value <= 0
    )
      return false;
    return true;
  };

  return (
    <>
      {inputErr && (
        <ErrorModal
          title={inputErr.title}
          message={inputErr.message}
          onClose={() => setInputErr(null)}
        ></ErrorModal>
      )}
      <Card className={classes.form}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' ref={username} />
          </div>
          <div>
            <label htmlFor='age'>Age(Years)</label>
            <input id='age' type='number' ref={age} />
          </div>
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
