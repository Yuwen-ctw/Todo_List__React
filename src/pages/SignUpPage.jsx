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
import { signup, checkPermission } from 'api/auth';
import Swal from 'sweetalert2';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
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

  async function handleSignup(username, password, email) {
    if (username.length === 0) return;
    if (password.length === 0) return;
    if (email.length === 0) return;
    try {
      const { success, authToken } = await signup({
        username,
        password,
        email,
      });
      if (success) {
        localStorage.setItem('authToken', authToken);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: '註冊成功',
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/todos');
        return;
      }
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: '註冊失敗',
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
