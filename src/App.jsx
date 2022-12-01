import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoPage, LoginPage, SignUpPage, HomePage } from './pages';
import { AuthContextProvider } from './context/AuthContext';

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <AuthContextProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="todos" element={<TodoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
