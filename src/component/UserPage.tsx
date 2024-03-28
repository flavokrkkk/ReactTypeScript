import { FC, useEffect, useState } from "react";
import List from "./List";
import { IUser } from "../types/types";
import UserItem from "./UserItem";
import axios from "axios";
import EventExample from "./EventExample";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()

     const fetchUsers = async () => {
        try {
          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
          setUsers(response.data)
        } catch (e) {
          alert(e);
        }
    }
  
    useEffect(() => {
      fetchUsers()
    }, [])

return (
    <>
        <h1 style={{marginTop: 50}}>Users</h1>
        <EventExample/>
        <hr/>
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem onClick={(user) => navigate(`/users/${user.id}`)} user={user} key={user.id}/>}
        />
    </>
    );
};

export default UserPage;