import { NavBtnProps } from '@/lib/types/NavBtnType';
import styled from 'styled-components';

const NavBtn = ({ image, text, onClick }: NavBtnProps) => {
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

const Container = styled.div`
  width: 7vh;
  height: 6.8vh;
  position: relative;
  align-content: center;
  cursor: pointer;
`;
const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  width: 8vh;
  background-color: transparent;
`;
const StyledImage = styled.img`
  width: 3.2vh;
  margin: auto;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
`;
const StyledText = styled.div`
  font-size: 1.3vh;
  margin-top: 5px;
  text-align: center;
  color: var(--color-gray-dark);
  font-weight: var(--font-weight-medium);
`;
