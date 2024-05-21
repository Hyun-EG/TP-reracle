import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { wasteCategories } from '@/lib/constants/wasteCategories';
import { Layout } from './layout/Layout';
import { wasteCategoryItemsImages } from '@/lib/constants/wasteCategoryItemsImages';
import { IoArrowBack } from 'react-icons/io5';

const Container = styled.div`
  width: 100%;
  height: 530px;
  background-color: var(--color-white);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  overflow-y: auto;
`;
const HorizontalLine = styled.div`
  width: 46vh;
  height: 1px;
  margin: 3vh auto 0.1vh;
  background-color: var(--color-purple);
`;
const CategoryText = styled.span`
  font-size: 2.3vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
  margin-top: 0.6vh;
  margin-left: 5vh;
`;
const Text = styled.p`
  width: 46vh;
  margin: 3vh auto;
  line-height: 3.2vh;
  font-size: 2.2vh;
  font-weight: var(--font-weight-regular);
`;
const ImageContainer = styled.img`
  width: 26vh;
  height: 23vh;
  background-color: var(--color-purple-light);
  border-radius: 14px;
  display: flex;
  margin: 3vh auto 1vh;
  justify-content: center;
  align-items: center;
`;

const StyledGoBackBtn = styled.button`
  position: absolute;
  margin-top: 1vh;
  margin-left: 1.5vh;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  font-size: 1.8vh;
  cursor: pointer;
`;

const DetailItems = () => {
  const navigate = useNavigate();
  const { categoryId, itemId } = useParams<{ categoryId: string; itemId: string }>();
  const category = wasteCategories.find((category) => category.id === categoryId);

  if (!category) {
    return <div>카테고리를 찾을 수 없습니다.</div>;
  }

  const item = category.items && category.items.find((item) => item.id === itemId);
  if (!item) {
    return <div>아이템을 찾을 수 없습니다.</div>;
  }

  console.log(category);

  const handleGoBack = () => {
    if (category) {
      navigate(`/${category.id}`);
    }
  };

  return (
    <Layout>
      <Container>
        <StyledGoBackBtn onClick={handleGoBack}>
          <IoArrowBack />
        </StyledGoBackBtn>
        <HorizontalLine />
        <CategoryText>{item.name}</CategoryText>
        {item.img && <ImageContainer src={wasteCategoryItemsImages[item.img]} alt={item.name} />}
        <HorizontalLine />
        <CategoryText>배출방법</CategoryText>
        <Text>{item.disposalMethod}</Text>
      </Container>
    </Layout>
  );
};

export default DetailItems;
