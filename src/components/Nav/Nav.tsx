import React from 'react'
import styled from 'styled-components'
import NavBtn from './NavBtn'

const Nav = () => {
	return (				
		<Container>
			<Notice>2024-05-03 09:00 ~ 10:00 (1시간) 점검 예정입니다.</Notice>
			<Navbar>
				<NavBtn image="/home_FILL0_wght400_GRAD0_opsz24.svg" text="홈"></NavBtn>					
				<NavBtn image="/question_exchange_FILL0_wght400_GRAD0_opsz24.svg" text="R지식in"></NavBtn>					
				<NavBtn image="/breaking_news_FILL0_wght400_GRAD0_opsz24.svg" text="게시판"></NavBtn>					
			</Navbar>
		</Container>				
	)
}

export default Nav

const Container = styled.div`
  position: relative; 
`

const Notice = styled.div`
	width: 375px;
	height: 25px;
	position: absolute;
	border-top: 1px solid var(--color-purple);
	border-bottom: 1px solid var(--color-purple);	
	background-color: var(--color-purple-light);
	font-size: 10px;
	font-weight: var(--font-weight-bold);
	color: var(--color-purple);
	display: flex;
	justify-content: center;
	align-items: center;

	&::before {
		content: "";
    display: inline-block;
    vertical-align: middle;
    height: 18px;
    width: 18px;
    margin-right: 10px;
    background: url("/campaign_20dp_FILL0_wght300_GRAD0_opsz20.svg") no-repeat center center;
	}
`
const Navbar = styled.div`
  width: 375px;
	height: 68px;
	position: absolute;
	top: 27px;
	background-color: var(--color-green);
	border-radius: 0 0 14px 14px;
	display: flex;
	justify-content: space-evenly;
`

