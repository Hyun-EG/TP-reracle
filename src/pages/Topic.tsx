import styled from 'styled-components';
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';

const HeaderTopic = styled.div`
  width: 56.3vh;
  height: 3.75vh;
  background: #fcd118;
  color: #9747ff;
  text-align: center;
  align-content: center;
  line-height: 3.75vh;
`;

interface TopicContentProps {
  isExpanded: boolean;
}

const TopicContent = styled.div<TopicContentProps>`
  margin: 1.5vh auto;
  width: 50vh;
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '3.75vh')};
  background: ${({ isExpanded }) => (isExpanded ? '#9747ff' : '#fef3c1')};
  border-radius: 14.31px;
  text-align: center;
  align-content: center;
  font-size: 13.6px;
  font-weight: bold;
  color: ${({ isExpanded }) => (isExpanded ? 'white' : 'black')};
  cursor: pointer;
  transition: background 0.3s ease, height 0.3s ease;
  line-height: 3.75vh;
  overflow: hidden;
`;

interface TopicItemProps {
  date: string;
  time: string;
  details: string;
}

const TopicItem: React.FC<TopicItemProps> = ({ date, time, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TopicContent isExpanded={isExpanded} onClick={handleToggle}>
      {date} {time} 점검 예정입니다.
      {isExpanded && (
        <div>
          {/* 여기에 상세내용을 적으시면 됩니다 */}
          {details}
        </div>
      )}
    </TopicContent>
  );
};

export const Topic: React.FC = () => {
  return (
    <Layout>
      <HeaderTopic>공지사항</HeaderTopic>
      <TopicItem
        date="2024-05-03"
        time="09:00 ~ 10:00 (1시간)"
        details="점검 동안 서비스 이용이 중지됩니다. 양해 부탁드립니다."
      />
      <TopicItem
        date="2024-05-04"
        time="10:00 ~ 11:00 (1시간)"
        details="서버 업데이트로 인해 서비스가 일시 중지됩니다."
      />
      <TopicItem
        date="2024-05-05"
        time="11:00 ~ 12:00 (1시간)"
        details="정기 점검이 진행됩니다. 서비스 이용에 불편을 드려 죄송합니다."
      />
      <TopicItem
        date="2024-05-06"
        time="12:00 ~ 13:00 (1시간)"
        details="시스템 점검으로 인해 잠시 서비스가 중단됩니다."
      />
      <TopicItem
        date="2024-05-07"
        time="13:00 ~ 14:00 (1시간)"
        details="안정적인 서비스 제공을 위해 점검을 실시합니다."
      />
    </Layout>
  );
};
