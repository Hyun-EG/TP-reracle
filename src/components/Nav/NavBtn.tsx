import { navBtnType } from '@/lib/types/navBtnType';
import styled from 'styled-components';

const NavBtn = ({ image, text, onClick }: navBtnType) => {
  return (
    <Container>
      <StyeldButton onClick={onClick}>
        <StyledImage src={image} />
        <StyledText>{text}</StyledText>
      </StyeldButton>
    </Container>
  );
};
export default NavBtn;

const StyeldButton = styled.button`
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
  background: url(${(props) => props.imageUrl}) no-repeat center center;
`;
const StyledText = styled.div`
  font-size: 8.6px;
  margin-top: 5px;
  text-align: center;
  color: var(--color-gray-dark);
  font-weight: var(--font-weight-medium);
`;
