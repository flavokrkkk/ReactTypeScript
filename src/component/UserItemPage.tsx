import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export interface UserItemPageParam {
    id: string
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParam>()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
        console.log(user);
      }, [])
    
      //Принимаем users с сервера
      async function fetchUser() {
        try {
         const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
         setUser(response.data)
        } catch (e) {
          console.log(e);
        }
      } 

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;