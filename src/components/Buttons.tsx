import { styled } from "styled-components";


// 보라색 버튼
export const PurpleButton = styled.button`
  width: 304px;
  height: 40px;
  border: none;
  background-color: var(--color-purple);
  color: var(--color-white);
  cursor: pointer;

  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: var(--font-weight-bold);
  transition: 0.2s;
  border-radius: 14px;

  &:hover {
    background-color: var(--color-purple-light);
    color: var(--color-purple);
  }
`;
// 화이트 버튼
export const WhiteButton = styled.button`
  width: 304px;
  height: 40px;
  border: 1px solid var(--color-purple);
  background-color: var(--color-white);
  color: var(--color-purple);
  cursor: pointer;

  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: var(--font-weight-bold);
  transition: 0.2s;
  border-radius: 14px;
`;


