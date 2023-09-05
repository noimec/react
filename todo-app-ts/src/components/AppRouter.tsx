import { Navigate, Route, Routes } from "react-router-dom"
import { publicRoutes, privateRoutes } from "../router/routes"
import { useContext } from "react";
import { AuthContext } from "../context/context";
import { Loader } from "./UI/Loader/Loader";

export const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) { return <Loader /> }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => <Route key={route.path} element={<route.component />} path={route.path} />)}
                <Route path="*" element={<Navigate to="posts" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => <Route key={route.path} element={<route.component />} path={route.path} />)}
                <Route path="*" element={<Navigate to="login" replace />} />
            </Routes>
    )
}