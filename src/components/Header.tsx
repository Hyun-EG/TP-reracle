import styled from 'styled-components';

const Header = () => {
  return (
    <Headbar>
      <Logo src="/logosmall.svg" alt="logo" />
      <UserIcon src="/person_20dp_FILL1_wght400_GRAD0_opsz20.svg" alt="user" />
    </Headbar>
  );
};

export default Header;

export const HEADER_HEIGHT = 6.3;

const Headbar = styled.div`
  width: 56.36vh;
  height: ${HEADER_HEIGHT}vh;
  background-color: var(--color-purple-light);
  border-radius: 14px 14px 0 0;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 10vh;
  position: absolute;
  margin-left: 3vh;
  cursor: pointer;
`;
const UserIcon = styled.img`
  width: 20px;
  position: absolute;
  right: 0;
  margin-right: 15px;
  cursor: pointer;
`;
