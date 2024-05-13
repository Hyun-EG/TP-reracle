import React from 'react'
import styled from 'styled-components';
import { PurpleButton, WhiteButton } from '../Buttons'

const MyPage = () => {
	return (
		<Container>
			<MyPageHeader>마이페이지</MyPageHeader>
			<UserInfo>
				<HorizontalLine />
				<UserName>이름</UserName>
				<Input />
				<HorizontalLine />
				<UserEmail>이메일</UserEmail>
				<Input />
				<HorizontalLine />
				<UserPassword>비밀번호</UserPassword>
				<Input type="password" />
			</UserInfo>
			<PurpleButton>회원정보 수정</PurpleButton>
			<WhiteButton>나의 R지식in 보러가기</WhiteButton>
			<SearchList>
				<HorizontalLine />
				<ListText>나의 최근 재활용품 검색 리스트</ListText>
				<RecentSearchBtnContainer>
					<RecentSearchBtn>냉장고</RecentSearchBtn>
					<RecentSearchBtn>냉장고</RecentSearchBtn>
					<RecentSearchBtn>냉장고</RecentSearchBtn>
					<RecentSearchBtn>아름다운폐건전지</RecentSearchBtn>
					<RecentSearchBtn>아름다운폐건전지</RecentSearchBtn>
					<RecentSearchBtn>아름다운폐건전지</RecentSearchBtn>
				</RecentSearchBtnContainer>
			</SearchList>			
		</Container>
	)
}

export default MyPage


const Container = styled.div`
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
const UserInfo = styled.div`
	width: 46vh;
	height: 35vh;
	margin-top: 7vh;
	// background-color: var(--color-purple-light);
`
const HorizontalLine = styled.div`
	width: 46vh;	
  height: 1px;
  margin: 2vh auto .1vh;
  background-color: var(--color-purple);
`;
const UserName = styled.span`
  font-size: 1.5vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
`;
const UserEmail = styled.span`
	font-size: 1.5vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple); 
`;
const UserPassword = styled.span`
	font-size: 1.5vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
`;
const Input = styled.input`
  width: 46vh;
  height: 5vh;
	margin-top: 1.3vh;
  font-size: 3vh;
	border: none;
	color: var(--color-gray-dark);
  font-weight: var(--font-weight-bold);
	background-color: transparent;

`
const SearchList = styled.div`
	width: 46vh;	
`
const ListText = styled.span`
	font-size: 2vh;
	font-weight: var(--font-weight-bold);
	color: var(--color-purple);
`
const RecentSearchBtnContainer = styled.ul`
  width: 46vh;
  height: 4vh;
  display: flex;
	flex-wrap: wrap;
	padding: 2vh 0;
	gap: 1.5vh;
`
const RecentSearchBtn = styled.li`
  padding: 1vh;
  background-color: var(--color-yellow);
  color: var(--color-purple);
  cursor: pointer;
	text-align: center;
  font-size: 2vh;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: var(--font-weight-bold);
  transition: 0.2s;
  border-radius: 14px;
  border: none;
`;