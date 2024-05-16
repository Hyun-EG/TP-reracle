import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  background-color: #d8ffda;
  width: 23.4375rem;
  height: 41.6875rem;
`;

export const Loading = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/Home');
    }, 1500);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <LoadingContainer>
      <img
        src="./assets/images/logo.png"
        alt="logo"
        style={{
          display: 'block',
          margin: '0 auto',
          paddingTop: '12rem',
        }}
      />
    </LoadingContainer>
  );
};
