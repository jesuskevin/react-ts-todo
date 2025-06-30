import { ReactNode, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { AuthContext } from "../hooks/useAuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const getUser = async () => {
    const { data } = await axios.post("/auth/user");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    try {
      await axios.post("/auth/login", data);
      await getUser();
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          setErrors(error.response.data);
        }
      }
    }
  };

  const register = async ({ ...data }) => {
    try {
      await axios.post("/auth/register", data);
      await getUser();
      navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  const logout = () => {
    axios.post('/auth/logout').then(() => {
      setUser(null);
    }).catch(err => {
      if (err.status === 401) {
        setUser(null);
        navigate('/');
      }
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
