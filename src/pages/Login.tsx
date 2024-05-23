import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import styled from 'styled-components';
import { PurpleButton, WhiteButton } from '@/components/Buttons';
import loginPageImg from '../assets/images/loginPageImg.png';
import { MdAlternateEmail, MdOutlinePassword } from 'react-icons/md';
import PageHeader from '@/components/PageHeader';

const Container = styled.section`
  width: 56.3vh;
  height: 79.7vh;
  background-color: var(--color-white);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  overflow-y: hidden;
`;
const ImgContainer = styled.img`
  width: 20vh;
  padding: 5vh;
`;
const LoginFrom = styled.form`
  width: 46vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const InputContainer = styled.div`
  display: flex;
  position: relative;
`;
const TextInput = styled.input`
  width: 46vh;
  height: 6vh;
  border: 1px solid var(--color-purple);
  border-radius: 1vh;
  margin-bottom: 1vh;
  padding-left: 5vh;
  box-sizing: border-box;
  font-size: 2vh;
`;
const EmailLabel = styled(MdAlternateEmail)`
  position: absolute;
  left: 1.5vh;
  top: 1.8vh;
  font-size: 2.5vh;
  color: var(--color-purple);
`;
const PwLabel = styled(MdOutlinePassword)`
  position: absolute;
  left: 1.5vh;
  top: 1.8vh;
  font-size: 2.5vh;
  color: var(--color-purple);
`;
const LinkContainer = styled.div`
  width: 46vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LinkButton = styled(WhiteButton)`
  &:first-child {
    margin-right: 1vh;
  }
`;
const ErrorMessage = styled.p`
  position: absolute;
  bottom: 7.5vh;
  animation: vibration 0.1s;
  @keyframes vibration {
    0% {
      transform: translateX(0);
      color: var(--color-gray-dark);
    }
    25% {
      transform: translateX(-5px);
      ccolor: #7e3f46;
    }
    50% {
      transform: translateX(5px);
      color: #be3f46;
    }
    75% {
      transform: translateX(-5px);
      color: #ff3f46;
    }
    100% {
      transform: translateX(0);
      color: var(--color-red);
    }
  }
`;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        localStorage.setItem(
          'userData',
          JSON.stringify({
            uid: user.uid,
            email: userData.email,
            nickname: userData.nickname,
          }),
        );
        navigate('/'); // 로그인 후 이동할 페이지
      } else {
        setError('사용자 데이터를 찾을 수 없습니다.');
      }
    } catch (error: any) {
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
    }
  };

  return (
    <Layout>
      <PageHeader title="로그인" />
      <Container>
        <ImgContainer src={loginPageImg} alt="" />
        <LoginFrom onSubmit={handleLogin}>
          <InputContainer>
            <TextInput
              type="text"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <EmailLabel />
          </InputContainer>
          <InputContainer>
            <TextInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PwLabel />
          </InputContainer>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <PurpleButton type="submit">로그인</PurpleButton>
        </LoginFrom>
        <LinkContainer>
          <LinkButton onClick={() => navigate('/pwreset')}>비밀번호 재설정</LinkButton>
          <LinkButton onClick={() => navigate('/signup')}>회원가입</LinkButton>
        </LinkContainer>
      </Container>
    </Layout>
  );
};
