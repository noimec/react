import { useContext } from "react"
import { MyButton } from "../components/UI/button/MyButton"
import { MyInput } from "../components/UI/input/MyInput"
import { AuthContext } from "../context/context"

interface Element { preventDefault: () => void }

export const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = (e: Element) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Name" />
                <MyInput type="password" placeholder="Password" />
                <MyButton>Log in</MyButton>
            </form>
        </div>
    )
}