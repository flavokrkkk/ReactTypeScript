import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UserPage: FC = () => {

    const [user, setUser] = useState <IUser[]> ([])
    const navigate = useNavigate()

    useEffect(() => {
      fetchUser()
    }, [])
  
    //Принимаем users с сервера
    async function fetchUser() {
      try {
       const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
       setUser(response.data)
      } catch (e) {
        console.log(e);
      }
    } 
    return (
        <div>
            <h1>Users</h1>
        <List
            items={user}
            renderItem={(user: IUser) => <UserItem onClick={(user) => navigate(`${user.id}`)} user={user} key={user.id}/>}
        />
        </div>
    );
};

export default UserPage;