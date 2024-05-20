import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PurpleButton, WhiteButton } from '../Buttons';
import UserInfo from './UserInfo';
import { userData } from './UserData';
import { Layout } from '@/components/layout/Layout';
import { useSearchStore } from '@/lib/store/useSearchStore';
// import { useLocalStorage } from './useLocalStorage';

const Container = styled.section`
  width: 56.3vh;
  height: 79.7vh;
  background-color: var(--color-white);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  overflow-y: hidden;
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
  margin-top: 6vh;
  // background-color: var(--color-purple-light);
`;
const HorizontalLine = styled.div`
  width: 46vh;
  height: 1px;
  margin: 2vh auto 0.1vh;
  background-color: var(--color-purple);
`;
const SearchList = styled.div`
  width: 46vh;
`;
const ListText = styled.span`
  font-size: 2vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
`;
const RecentSearchBtnContainer = styled.ul`
  width: 46vh;
  height: 4vh;
  display: flex;
  flex-wrap: wrap;
  padding: 2vh 0;
  gap: 1.5vh;
`;
const RecentSearchBtn = styled.li`
  padding: 1vh;
  background-color: var(--color-yellow);
  color: var(--color-purple);
  cursor: pointer;
  text-align: center;
  font-size: 2vh;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: var(--font-weight-bold);
  transition: 0.2s;
  border-radius: 14px;
  border: none;
`;

const MyPage = () => {
  const [user, setUser] = useState({
    name: userData.name,
    email: userData.email,
    password: userData.password,
  });
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((u) => ({ ...u, name: e.target!.value }));
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((u) => ({ ...u, email: e.target!.value }));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((u) => ({ ...u, password: e.target!.value }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(user);
    alert('회원정보가 수정되었습니다');
  };

  const { searchHistory } = useSearchStore();
  const navigation = useNavigate();

  const handleNavClick = (path: string) => {
    navigation(path);
  };

  // const searchHistory = useSearchStore((state) => state.searchHistory);
  // const navigate = useNavigate();

  // const handleNavClick = (searchQuery) => {
  // const path = `/${searchQuery.id}`;
  //   navigate(path);
  // };

  return (
    <Layout>
      <Container>
        <MyPageHeader>마이페이지</MyPageHeader>
        <UserInfoContainer>
          <UserInfo label="이름" type="text" value={user.name} onChange={handleNameChange}>
            이름
          </UserInfo>
          <UserInfo label="이메일" type="email" value={user.email} onChange={handleEmailChange}>
            이메일
          </UserInfo>
          <UserInfo label="비밀번호" type="password" value={user.password} onChange={handlePasswordChange}>
            비밀번호
          </UserInfo>
        </UserInfoContainer>
        <PurpleButton onClick={handleClick}>회원정보 수정</PurpleButton>
        <WhiteButton>나의 R지식in 보러가기</WhiteButton>
        <SearchList>
          <HorizontalLine />
          <ListText>나의 최근 재활용품 검색 리스트</ListText>
          <RecentSearchBtnContainer>
            {searchHistory.map((searchQuery, index) => (
              <RecentSearchBtn onClick={() => handleNavClick(searchQuery)} key={index}>
                {`#` + searchQuery}
              </RecentSearchBtn>
            ))}
          </RecentSearchBtnContainer>
        </SearchList>
      </Container>
    </Layout>
  );
};

export default MyPage;
