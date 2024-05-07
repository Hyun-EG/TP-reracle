import styled from 'styled-components';
import { PurpleButton, WhiteButton } from './Buttons';

<<<<<<< HEAD
const Header = () => {
  return (
    <Heading>Header
      <PurpleButton>등록</PurpleButton>
      <WhiteButton>취소</WhiteButton>
    </Heading>
  )
=======
export const Header = () => {
  return <Heading></Heading>;
>>>>>>> develop
};

const Heading = styled.div`
  color: var(--color-purple);
  font-weight: var(--font-weight-regular);
`;
