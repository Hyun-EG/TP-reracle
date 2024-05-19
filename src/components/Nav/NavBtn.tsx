import styled from 'styled-components';
import { navBtnTypes } from '@/lib/types/navBtnTypes';

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  width: 8vh;
  background-color: transparent;
`;
const Container = styled.div`
  width: 7vh;
  height: 6.8vh;
  position: relative;
  align-content: center;
  cursor: pointer;
`;
const StyledImage = styled.img`
  width: 3.2vh;
  margin: auto;
`;
const StyledText = styled.div`
  font-size: 1.3vh;
  margin-top: 5px;
  text-align: center;
  color: var(--color-gray-dark);
  font-weight: var(--font-weight-medium);
`;

const NavBtn = ({ image, text, onClick }: navBtnTypes) => {
  return (
    <Container>
      <StyledButton onClick={onClick}>
        <StyledImage src={image} />
        <StyledText>{text}</StyledText>
      </StyledButton>
    </Container>
  );
};

export default NavBtn;
