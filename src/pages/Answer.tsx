import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Layout } from '@/components/layout/Layout';

const AnswerBlock = styled.button`
  display: block;
  margin: 1vh auto;
  border: none;
  background: #93fd98;
  color: white;
  font-size: 2vh;
`;

const AnswerContainer = styled.div`
  text-align: center;
  margin-top: 4vh;
  overflow: hidden; /* 스크롤 생기지 않도록 설정 */
`;

const AnswerDisplay = styled.div`
  margin-top: 2vh;
  height: 50vh; /* 고정된 높이 설정 */
  overflow-y: auto; /* 수직 스크롤만 허용 */
`;

const InputAnswer = styled.textarea`
  width: 50vh;
  height: 10vh;
`;

const AnswerBtn = styled.button`
  width: 12vh;
  height: 4vh;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 2vh;
  background: #93fd98;
  color: white;
`;

const AnswerBox = styled.div`
  position: relative;
  background: #93fd98;
  width: 50vh;
  margin: 1.5vh auto;
  display: flex;
  flex-direction: column; /* 작성자 정보와 답변 내용을 위아래로 표시하기 위해 */
  align-items: center;
  padding: 1vh; /* 여백 추가 */
  border-radius: 10px;
  color: white;
`;

const AnswerContent = styled.p`
  color: black;
  word-wrap: break-word; /* 단어가 길 경우 줄바꿈 */
  word-break: break-all; /* 단어 단위로 줄바꿈 */
  white-space: pre-wrap; /* 공백과 줄 바꿈 유지 */
`;

const AnswerInfo = styled.div`
  margin-top: 1vh; /* 작성자 정보와 답변 내용 사이의 간격 조정 */
`;

const DeleteButton = styled.button`
  background: #ff4747;
  border: none;
  border-radius: 5px;
  height: 2.5vh;
  color: white;
  cursor: pointer;
  padding: 0 1vh;
  font-size: 1.5vh;
  margin-top: 1vh; /* 삭제 버튼과 작성자 정보 사이의 간격 조정 */
`;

export const Answer: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [submittedAnswers, setSubmittedAnswers] = useState<{ author: string; content: string }[]>([]);

  const handleSubmit = () => {
    setSubmittedAnswers([...submittedAnswers, { author: '작성자', content: answer }]);
    setAnswer('');
  };

  const handleDeleteAnswer = (index: number) => {
    const updatedAnswers = [...submittedAnswers];
    updatedAnswers.splice(index, 1);
    setSubmittedAnswers(updatedAnswers);
  };

  return (
    <Layout>
      <div>
        <AnswerBlock>답변하기</AnswerBlock>
        <h1>질문 내용</h1> {/* 질문 내용 표시 */}
        <AnswerContainer>
          <InputAnswer value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <AnswerBtn onClick={handleSubmit}>답변하기</AnswerBtn>
        </AnswerContainer>
        <AnswerDisplay>
          {submittedAnswers.map((submittedAnswer, index) => (
            <AnswerBox key={index}>
              <AnswerInfo>{submittedAnswer.author}</AnswerInfo>
              <AnswerContent>{submittedAnswer.content}</AnswerContent>
              <DeleteButton onClick={() => handleDeleteAnswer(index)}>삭제</DeleteButton>
            </AnswerBox>
          ))}
        </AnswerDisplay>
      </div>
    </Layout>
  );
};
