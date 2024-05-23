import React, { useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import styled from 'styled-components';
import PageHeader from '@/components/PageHeader';
import { PurpleButton, WhiteButton } from '@/components/Buttons';
import { MdAlternateEmail, MdOutlinePassword, MdOutlineTagFaces } from 'react-icons/md';

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

const SignUpFrom = styled.form`
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
const NameLabel = styled(MdOutlineTagFaces)`
  position: absolute;
  left: 1.5vh;
  top: 1.8vh;
  font-size: 2.5vh;
  color: var(--color-purple);
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

export const SignUp = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [errorKey, setErrorKey] = useState(0);
  const navigate = useNavigate();

  const saveUserInfoToFirestore = async (userId: string, email: string, nickname: string) => {
    try {
      // "users" 컬렉션에 사용자 UID를 문서 ID로 사용하여 사용자 정보 저장
      await setDoc(doc(db, 'users', userId), {
        email: email,
        nickname: nickname,
        uid: userId,
      });
      console.log('사용자 정보가 성공적으로 Firestore에 저장되었습니다.');
    } catch (error) {
      console.error('Firestore에 사용자 정보 저장 중 오류:', error);
    }
  };
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (nickname.length < 2) {
      setError('닉네임은 2자 이상이어야 합니다.');
      setErrorKey((prev) => prev + 1);
      return;
    }
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.');
      setErrorKey((prev) => prev + 1);
      return;
    }
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      setErrorKey((prev) => prev + 1);
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('이메일 형식이 올바르지 않습니다.');
      setErrorKey((prev) => prev + 1);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await saveUserInfoToFirestore(userCredential.user.uid, email, nickname);
      const userInfoDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      if (userInfoDoc.exists()) {
        const userInfo = userInfoDoc.data();
        localStorage.setItem('userData', JSON.stringify(userInfo));
        navigate('/');
      } else {
        setError('사용자 정보를 불러오는 데 실패했습니다.');
        setErrorKey((prev) => prev + 1);
      }
    } catch (error: any) {
      setError(error.message);
      setErrorKey((prev) => prev + 1);
    }
  };

  return (
    <Layout>
      <PageHeader title="회원가입" />
      <Container>
        <SignUpFrom onSubmit={handleSignUp}>
          <InputContainer>
            <TextInput
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <NameLabel />
          </InputContainer>
          <InputContainer>
            <TextInput
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <EmailLabel />
          </InputContainer>
          <InputContainer>
            <TextInput
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PwLabel />
          </InputContainer>
          <InputContainer>
            <TextInput
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <PwLabel />
          </InputContainer>
          {error && <ErrorMessage key={errorKey}>{error}</ErrorMessage>}
          <PurpleButton type="submit">회원가입</PurpleButton>
        </SignUpFrom>
        <WhiteButton onClick={() => navigate('/login')}>취소</WhiteButton>
      </Container>
    </Layout>
  );
};
