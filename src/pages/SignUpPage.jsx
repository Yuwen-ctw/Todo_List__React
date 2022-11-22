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
import { useAuth } from 'context/AuthContext';
import Swal from 'sweetalert2';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { isAuthenticated, register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return navigate('/todos');
  }, [navigate, isAuthenticated]);

  async function handleSignup(username, password, email) {
    if (username.length === 0) return;
    if (password.length === 0) return;
    if (email.length === 0) return;
    const success = await register({
      username,
      password,
      email,
    });
    if (success) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: '註冊成功',
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: '註冊失敗',
      showConfirmButton: false,
      timer: 1000,
    });
  }
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

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
          label={'Email'}
          placeholder={'請輸入Email'}
          type={'email'}
          value={email}
          onChange={(value) => setEmail(value)}
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
      <AuthButton onClick={() => handleSignup(username, password, email)}>
        註冊
      </AuthButton>
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
