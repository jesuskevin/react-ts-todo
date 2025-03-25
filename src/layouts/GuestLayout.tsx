import { Navigate, Outlet } from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext";

export const GuestLayout = () => {
    const { user } = useAuthContext();

    return !user ? <Outlet /> : <Navigate to="/" />
}