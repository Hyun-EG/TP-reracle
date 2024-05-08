import React from 'react'
import styled from 'styled-components';


const Header = () => {
	return (		
		<Container>
			<Headbar>
        <Logo src="/logosmall.svg" alt="logo" />
        <UserIcon src="/person_20dp_FILL1_wght400_GRAD0_opsz20.svg" alt="user" />								
			</Headbar>
		</Container>			
	)
}

export default Header

const Container = styled.div`
	position: relative;
`
const Headbar = styled.div`
  width: 375px;
	height: 42px;
	position: absolute;
	top: 0;
	background-color: var(--color-purple-light);
	border-radius: 14px 14px 0 0;
	display: flex;
  align-items: center;
`
const Logo = styled.img`
  width: 70px;
  position: absolute;
  margin-left: 15px;
  cursor: pointer;
`
const UserIcon = styled.img`
  width: 20px;
  position: absolute;
  right: 0;
  margin-right: 15px;
  cursor: pointer;
`

