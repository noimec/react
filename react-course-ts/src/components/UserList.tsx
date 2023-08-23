import { FC } from 'react';
import { IUser } from '../types/types';

interface UserListProps {
    users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map(user =>
                <div></div>
            )}
        </div>
    )
}