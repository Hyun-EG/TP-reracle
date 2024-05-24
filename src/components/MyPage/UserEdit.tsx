import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PurpleButton, WhiteButton } from '../Buttons';
import UserInfo from './UserInfo';
import { Layout } from '@/components/layout/Layout';
import { useSearchStore } from '@/lib/store/useSearchStore';


const Container = styled.section`
  width: 56.3vh;
  height: 79.7vh;
  background-color: var(--color-white);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  overflow-y: auto;
`;

const MyPageHeader = styled.div`
  width: 56.3vh;
  height: 3.75vh;
  position: absolute;
  top: 0;
  background-color: var(--color-green);
  font-size: 1.8vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfoContainer = styled.div`
  width: 46vh;
  height: 35vh;
  margin-top: 15vh;
  // background-color: var(--color-purple-light);
`;



const getUserData = () => {
  const data = localStorage.getItem('userData');
  return data ? JSON.parse(data) : null;
};

const MyPage = () => {
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const storedUserData = getUserData();
    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((u) => ({ ...u, nickname: e.target!.value }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((u) => ({ ...u, email: e.target!.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((u) => ({ ...u, password: e.target!.value }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(user));
    console.log(user);
    alert('회원정보가 수정되었습니다');
  };

  const searchHistory = useSearchStore((state) => state.searchHistory);
  const navigate = useNavigate();

  const handleNavClick = (categoryId: string, itemId: string) => {
    navigate(`/${categoryId}/${itemId}`);
  };

  const handleGoBack = () => {
    navigate('/mypage');
  };

  return (
    <Layout>
      <Container>
        <MyPageHeader>회원정보 수정</MyPageHeader>
        <UserInfoContainer>
          <UserInfo label="닉네임" type="text" value={user.nickname} onChange={handleNameChange}>
            닉네임
          </UserInfo>
          <UserInfo label="이메일" type="email" value={user.email} onChange={handleEmailChange}>
            이메일
          </UserInfo>
          <UserInfo label="비밀번호 재설정" type="password" value={user.password} onChange={handlePasswordChange}>
            비밀번호
          </UserInfo>
        </UserInfoContainer>
        <PurpleButton onClick={handleClick}>회원정보 수정</PurpleButton>
        <WhiteButton onClick={handleGoBack}>취소</WhiteButton>
      </Container>
    </Layout>
  );
};

export default MyPage;
