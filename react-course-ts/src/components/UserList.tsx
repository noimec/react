import React, { FC } from 'react';
import { IUser } from '../types/types';
import { UserItem } from './UserItem';

interface UserListProps {
    users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map(user =>
                <UserItem user={user} key={user.id} />
            )}
        </div>
    )
}