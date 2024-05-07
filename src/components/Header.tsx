import styled from 'styled-components';
import { PurpleButton, WhiteButton } from './Buttons';

export const Header = () => {
  return (
    <Heading>
      Header
      <PurpleButton>등록</PurpleButton>
      <WhiteButton>취소</WhiteButton>
    </Heading>
  );
};

const Heading = styled.div`
  color: var(--color-purple);
  font-weight: var(--font-weight-regular);
`;
