import { signup, login, checkPermission } from 'api/auth';
import * as jwt from 'jsonwebtoken';
import { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
};

const AuthContext = createContext(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [payload, setPayload] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    async function checkTokenIsValid() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setPayload(null);
        setIsAuthenticated(false);
        return;
      }
      const result = await checkPermission(authToken);
      if (result) {
        const temPayload = jwt.decode(authToken);
        setIsAuthenticated(true);
        setPayload(temPayload);
      } else {
        setPayload(null);
        setIsAuthenticated(false);
      }
    }
    checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: payload,
        register: async (data) => {
          try {
            const { success, authToken } = await signup({
              username: data.username,
              password: data.password,
              email: data.email,
            });
            const temPayload = jwt.decode(authToken);
            if (temPayload) {
              setPayload(temPayload);
              setIsAuthenticated(true);
              localStorage.setItem('authToken', authToken);
            } else {
              setPayload(null);
              setIsAuthenticated(false);
            }
            return success;
          } catch (error) {
            console.error(error);
          }
        },
        login: async (data) => {
          try {
            const { success, authToken } = await login({
              username: data.username,
              password: data.password,
            });
            const temPayload = jwt.decode(authToken);
            if (temPayload) {
              setPayload(temPayload);
              setIsAuthenticated(true);
              localStorage.setItem('authToken', authToken);
            } else {
              setPayload(null);
              setIsAuthenticated(false);
            }
            return success;
          } catch (error) {
            console.error(error);
          }
        },
        logout: () => {
          localStorage.removeItem('authToken');
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
