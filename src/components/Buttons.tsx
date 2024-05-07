import { styled } from "styled-components";

{
  /* <SmallButton btnColor="버튼색을 넣으세요" textColor="버튼 텍스트 칼라를 넣으세요">등록</SmallButton>*/
}
{
  /* <NormalButton btnColor="버튼색을 넣으세요" textColor="버튼 텍스트 칼라를 넣으세요">등록</NormalButton>  */
}

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


