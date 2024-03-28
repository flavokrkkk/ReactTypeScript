import { FC } from "react";
import { IUser } from "../types/types";
import { Button, Card } from "react-bootstrap";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem: FC <UserItemProps> = ({user, onClick}) => {

    return (
        <div>
            <Card style={{marginTop: '50px'}}>
                <Card.Title>
                    {user.id}. {user.name}
                </Card.Title>
                <Card.Body>
                    <Card.Text>{user.address.city}</Card.Text>
                    <hr/>
                    <Card.Text>{user.address.street}</Card.Text>
                    <hr/>
                    <Card.Text>{user.address.zipcode}</Card.Text>
                </Card.Body>
                <Button onClick={() => onClick(user)} variant="outline-dark">Профиль</Button>
            </Card>
        </div>
    );
};

export default UserItem;