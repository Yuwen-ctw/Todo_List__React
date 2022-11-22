import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, checkPermission } from 'api/auth';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    async function checkTokenIsValid() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) return;
      const result = await checkPermission(authToken);
      if (result) navigate('/todos');
      return;
    }
    checkTokenIsValid();
  }, [navigate]);
  async function handleLogin(username, password) {
    if (username.length === 0) return;
    if (password.length === 0) return;
    try {
      const { success, authToken } = await login({ username, password });
      if (success) {
        localStorage.setItem('authToken', authToken);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: '登入成功',
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/todos');
        return;
      }
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: '登入失敗',
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label={'帳號'}
          placeholder={'請輸入帳號'}
          value={username}
          onChange={(value) => setUsername(value)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label={'密碼'}
          type={'password'}
          placeholder={'請輸入密碼'}
          value={password}
          onChange={(value) => setPassword(value)}
        />
      </AuthInputContainer>
      <AuthButton onClick={() => handleLogin(username, password)}>
        登入
      </AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
