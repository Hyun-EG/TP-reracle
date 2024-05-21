import { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

const HeaderQna = styled.div`
  width: 56.3vh;
  height: 3.75vh;
  background: #9747ff;
  text-align: center;
  align-content: center;
  color: white;
  font-size: 2vh;
`;

const Question = styled.button`
  display: block;
  margin: 1vh auto;
  border: none;
  background: #93fd98;
  color: white;
  font-size: 2vh;
`;

const QnaArea = styled.div`
  text-align: center;
`;

const QuestionListContainer = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 1.5vh auto;
  width: 52vh;
  position: relative;
`;

const QuestionContainer = styled.div`
  background: #93fd98;
  width: 50vh;
  margin: 1.5vh auto;
  height: 3.75vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vh;
  border-radius: 10px;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  width: 35vh;
`;

const QuestionInput = styled.input.attrs({ maxLength: 21 })`
  background: #ffffff;
  border: none;
  border-radius: 5px;
  height: 2.5vh;
  width: 35vh;
  padding: 0.5vh;
  font-size: 1.5vh;
`;

const AddButton = styled.button`
  background: #9747ff;
  border: none;
  border-radius: 5px;
  height: 2.5vh;
  color: white;
  cursor: pointer;
  padding: 0 1vh;
  font-size: 1.5vh;
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
`;

export const Qna = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');

  const handleAddQuestion = () => {
    if (currentQuestion.trim() === '') return;
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion('');
  };

  const handleDeleteQuestion = (index: number) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      const updatedQuestions = [...questions];
      updatedQuestions.splice(index, 1);
      setQuestions(updatedQuestions);
    }
  };

  return (
    <Layout>
      <HeaderQna>R 지식in</HeaderQna>
      <Question>질문하기</Question>
      <QnaArea>
        <QuestionInput
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          placeholder="질문을 입력하세요"
        />
        <AddButton onClick={handleAddQuestion}>추가</AddButton>
      </QnaArea>

      <QuestionListContainer>
        {questions.map((question, index) => (
          <QuestionContainer key={index}>
            <StyledLink to={`/answer/${index}?question=${encodeURIComponent(question)}`}>
              {question}
            </StyledLink>
            <DeleteButton onClick={() => handleDeleteQuestion(index)}>삭제</DeleteButton>
          </QuestionContainer>
        ))}
      </QuestionListContainer>
    </Layout>
  );
};
