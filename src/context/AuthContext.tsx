import { ReactNode, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { AuthContext } from "../hooks/useAuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const getUser = async () => {
    const { data } = await axios.get("/api/user", {withCredentials: true});
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/login", data);
      await getUser();
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
      console.log(error);
    }
  };

  const register = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/register", data);
      await getUser();
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
      console.log(error);
    }
  };

  const logout = () => {
    axios.post('/logout').then(() => {
      setUser(null);
    })
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, errors, getUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
