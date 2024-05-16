import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavBtn from '@/components/Nav/NavBtn';

const Nav = () => {
  const navigation = useNavigate();

  const handleNavClick = (path: string) => {
    navigation(path);
  };

  return (
    <Container>
      <StyledNotice>2024-05-03 09:00 ~ 10:00 (1시간) 점검 예정입니다.</StyledNotice>
      <StyledNavbar>
        <NavBtn image="/home_FILL0_wght400_GRAD0_opsz24.svg" text="홈" onClick={() => handleNavClick('/')} />
        <NavBtn image="/question_exchange_FILL0_wght400_GRAD0_opsz24.svg" text="R지식in" />
        <NavBtn image="/breaking_news_FILL0_wght400_GRAD0_opsz24.svg" text="게시판" />
      </StyledNavbar>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 56.3vh;
  height: 13.95vh;
  position: fixed;
  bottom: 0;
`;

const StyledNotice = styled.div`
  width: 56.3vh;
  height: 3.75vh;
  position: absolute;
  border-top: 1px solid var(--color-purple);
  border-bottom: 1px solid var(--color-purple);
  background-color: var(--color-purple-light);
  font-size: 1.5vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 5vh;
    height: 5vh;
    margin-right: 10px;
    background: url('/campaign_20dp_FILL0_wght300_GRAD0_opsz20.svg') no-repeat center center;
  }
`;

export const NAV_HEIGHT = 10.2;

const StyledNavbar = styled.div`
  width: 56.3vh;
  height: ${NAV_HEIGHT}vh;
  position: absolute;
  bottom: 0;
  background-color: var(--color-green);
  border-radius: 0 0 14px 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;


  // width: 375px;
  // height: 68px;
  // position: absolute;
  // top: 27px;
  // background-color: var(--color-green);
  // border-radius: 0 0 14px 14px;
  // display: flex;
  // justify-content: space-evenly;
`;
