import { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

export interface UserPropsList {
    users: IUser[]
}

const UserList: FC <UserPropsList> = ({users}) => {

    return (
        <div>
            {users.map(user => 
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                )}
        </div>
    );
};

export default UserList;