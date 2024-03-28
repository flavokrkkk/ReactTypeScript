import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export type UserItemPageProps = {
    id: string
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)

    const navigate = useNavigate()
    
    const params = useParams<UserItemPageProps>()
    
    
     const fetchUser = async () => {
        try {
          const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          setUser(response.data)
        } catch (e) {
          alert(e);
        }
    }
  
    useEffect(() => {
      fetchUser()
    }, [])

    return (
        <div>
            <h1 style={{marginTop: 50}}>Профиль пользователя</h1>
            <Card style={{marginTop: '50px'}}>
                <Card.Title>
                    {user?.id}. {user?.name}
                </Card.Title>
                <Card.Body>
                    <Card.Text>{user?.address.city}</Card.Text>
                    <hr/>
                    <Card.Text>{user?.address.street}</Card.Text>
                    <hr/>
                    <Card.Text>{user?.address.zipcode}</Card.Text>
                </Card.Body>
                <Button onClick={() => navigate('/users')} variant="outline-dark">Back</Button>
            </Card>
        </div>
    );
};

export default UserItemPage;