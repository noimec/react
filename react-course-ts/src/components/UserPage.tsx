import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { List } from "./List";
import { UserItem } from "./UserItem";
import { useNavigate } from "react-router-dom";

export const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem onClick={(user) => history('/users/' + user.id)} user={user} key={user.id} />}
        />
    )
}