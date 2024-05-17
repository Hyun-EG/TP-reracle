import { styled } from 'styled-components';
import { Layout } from '@/components/layout/Layout';

const HeaderTopic = styled.div`
  width: 56.3vh;
  height: 25.05px;
  background: #fcd118;
  color: #9747ff;
  text-align: center;
  align-content: center;
`;

const TopicContent = styled.div`
  margin: 2rem;
  width: 50vh;
  height: 40px;
  background: #fef3c1;
  border-radius: 14.31px;
  text-align: center;
  align-content: center;
  font-size: 13.6px;
  font-weight: bold;
`;

export const Topic = () => {
  return (
    <>
      <Layout>
        <HeaderTopic>공지사항</HeaderTopic>
        <TopicContent>2024-05-03 09:00 ~ 10::00 (1시간) 점검 예정입니다.</TopicContent>
      </Layout>
    </>
  );
};
