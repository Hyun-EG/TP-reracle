import styled from 'styled-components';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  width: 375px;
  height: 667px;
  background-color: var(--color-white);
  position: relative;
`;
