import { FC, useEffect, useState } from "react"
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

type UserItemPageParams = {
    id: string;
}

export const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const history = useNavigate();

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <button onClick={() => history('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
        </div>
    )
}