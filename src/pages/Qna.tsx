import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Layout } from '@/components/layout/Layout';
import addQuestion from '../assets/images/addQuestion.png';

const HeaderQna = styled.div`
  width: 56.3vh;
  height: 3.75vh;
  background: #9747ff;
  text-align: center;
  align-content: center;
  color: white;
`;

const QnaContent = styled.div`
  margin: 2rem;
  width: 50vh;
  height: ${({ isExpanded }) => (isExpanded ? '20vh' : '5vh')};
  background: ${({ isExpanded }) => (isExpanded ? '#9747ff' : '#d8ffda')};
  border-radius: 14.31px;
  text-align: center;
  align-content: center;
  font-size: 2vh;
  font-weight: bold;
  cursor: pointer;
  transition: height 0.3s ease, background 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const AnswerInput = styled.textarea`
  width: 90%;
  height: 60%;
  margin-top: 3rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1.8vh;
  padding: 1rem;
  box-sizing: border-box;
  resize: none;
  maxlength: 50;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  font-size: 1.8vh;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const AnswerText = styled.div`
  margin-top: 1rem;
  font-size: 1.8vh;
  color: white;
`;

const StyledAppContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 56.3rem;
  max-height: 80rem;
  background-color: var(--color-white);
  position: relative;
  overflow: auto;
`;

const AddBtnWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const Addbtn = styled.img`
  width: 4.5vh;
`;

const EditButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #2196f3;
  color: white;
  font-size: 1.8vh;
  cursor: pointer;

  &:hover {
    background-color: #0b7dda;
  }
`;

export const QNA = () => {
  const [isExpanded, setIsExpanded] = useState({});
  const [answer, setAnswer] = useState({});
  const [hasAnswer, setHasAnswer] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [isEditing, setIsEditing] = useState({});

  const handleClick = (index) => {
    setIsExpanded((prevState) => ({ ...prevState, [index]: !prevState[index] }));
  };

  const handleSubmit = (index) => {
    if (hasAnswer[index]) {
      setIsExpanded((prevState) => ({ ...prevState, [index]: false }));
      setIsEditing((prevState) => ({ ...prevState, [index]: true }));
    } else {
      setHasAnswer((prevState) => ({ ...prevState, [index]: true }));
    }
  };

  const handleInputChange = (e, index) => {
    if (e.target.value.length <= 50) {
      setAnswer((prevState) => ({ ...prevState, [index]: e.target.value }));
    }
  };

  const handleAddQuestionClick = () => {
    setIsModalVisible(true);
  };

  const handleModalSubmit = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion('');
    setIsModalVisible(false);
  };

  const handleEditClick = (index) => {
    setIsEditing((prevState) => ({ ...prevState, [index]: !prevState[index] }));
    setIsExpanded((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleEditSubmit = (index) => {
    setIsEditing((prevState) => ({ ...prevState, [index]: false }));
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Layout>
      <StyledAppContainer>
        <HeaderQna>R 지식in</HeaderQna>
        {questions.map((question, index) => (
          <QnaContent key={index} isExpanded={isExpanded[index]} onClick={() => handleClick(index)}>
            {question}
            {isExpanded[index] && !hasAnswer[index] && (
              <>
                <AnswerInput
                  value={answer[index] || ''}
                  onClick={stopPropagation}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="답변을 입력하세요...(50자 내 입력가능)"
                  maxLength={50}
                />
                <SubmitButton onClick={() => handleSubmit(index)}>완료</SubmitButton>
              </>
            )}
            {hasAnswer[index] && isExpanded[index] && (
              <>
                {isEditing[index] ? (
                  <>
                    <AnswerInput
                      value={answer[index] || ''}
                      onClick={stopPropagation}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="답변을 입력하세요...(50자 내 입력가능)"
                      maxLength={50}
                    />
                    <SubmitButton onClick={() => handleEditSubmit(index)}>수정 완료</SubmitButton>
                  </>
                ) : (
                  <>
                    <AnswerText>{answer[index]}</AnswerText>
                    <EditButton onClick={() => handleEditClick(index)}>수정</EditButton>
                  </>
                )}
              </>
            )}
          </QnaContent>
        ))}
        {isModalVisible && (
          <QnaContent>
            <AnswerInput
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="새로운질문을 입력하세요..."
            />
            <SubmitButton onClick={handleModalSubmit}>완료</SubmitButton>
          </QnaContent>
        )}
        <AddBtnWrapper>
          <Addbtn src={addQuestion} alt="질문 추가" onClick={handleAddQuestionClick} />
        </AddBtnWrapper>
      </StyledAppContainer>
    </Layout>
  );
};
