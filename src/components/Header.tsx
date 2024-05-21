import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const HEADER_HEIGHT = 6.3;
const Headbar = styled.div`
  width: 56.3vh;
  height: ${HEADER_HEIGHT}vh;
  background-color: var(--color-purple-light);
  border-radius: 14px 14px 0 0;
  display: flex;
  align-items: center;
  position: relative;
`;
const Logo = styled.img`
  width: 10vh;
  position: absolute;
  margin-left: 3vh;
  cursor: pointer;
`;
const UserIcon = styled.img`
  width: 3.5vh;
  position: absolute;
  right: 0;
  margin-right: 3vh;
  cursor: pointer;
`;

const Header = () => {
  const navigation = useNavigate();
  const handleNavClick = (path: string) => {
    navigation(path);
  };
  const handleUserIconClick = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      handleNavClick('/mypage');
    } else {
      handleNavClick('/login');
    }
  };
  return (
    <Headbar>
      <Logo src="/logosmall.svg" alt="logo" onClick={() => handleNavClick('/')} />
      <UserIcon src="/person_20dp_FILL1_wght400_GRAD0_opsz20.svg" alt="user" onClick={handleUserIconClick} />
    </Headbar>
  );
};

export default Header;
