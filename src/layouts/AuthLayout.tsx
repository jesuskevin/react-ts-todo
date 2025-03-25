import { Navigate, Outlet } from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext";

export const AuthLayout = () => {
    const { user } = useAuthContext();

    return user ? <Outlet /> : <Navigate to="login" />
}