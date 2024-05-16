import styled from 'styled-components';
import { NavBtnProps } from '@/lib/types/NavBtnType';

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

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  width: 3.1rem;
  background-color: transparent;
`;

const Container = styled.div`
  width: 40px;
  height: 68px;
  position: relative;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 24px;
  height: 24px;
  margin: auto;
  background: url(${(props) => props.src}) no-repeat center center;
`;

const StyledText = styled.div`
  font-size: 8.6px;
  margin-top: 5px;
  text-align: center;
  color: var(--color-gray-dark);
  font-weight: var(--font-weight-medium);
`;
