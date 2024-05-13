import React from 'react';
import styled from 'styled-components';

const NavBtn = ({ image, text }) => {
  return (
    <Container>
      <Image imageUrl={image} />
      <Text>{text}</Text>
    </Container>
  );
};
export default NavBtn;

const Container = styled.div`
  width: 40px;
  height: 68px;
  position: relative;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`;
const Image = styled.div`
  width: 24px;
  height: 24px;
  margin: auto;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
`;
const Text = styled.div`
  font-size: 8.6px;
  margin-top: 5px;
  text-align: center;
  color: var(--color-gray-dark);
  font-weight: var(--font-weight-medium);
`;
