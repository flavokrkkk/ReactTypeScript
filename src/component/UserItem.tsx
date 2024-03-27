import { FC } from "react";
import { IUser } from "../types/types";
interface UseritemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem: FC <UseritemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 20, border: '1px solid black', marginTop: 10}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;