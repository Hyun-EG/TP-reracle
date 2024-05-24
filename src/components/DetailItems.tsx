import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { GoChevronLeft } from 'react-icons/go';
import { wasteCategories } from '@/lib/constants/wasteCategories';
import { Layout } from './layout/Layout';
import { wasteCategoryItemsImages } from '@/lib/constants/wasteCategoryItemsImages';

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
const ImageWrapper = styled.div`
  width: 46vh;
  height: 23vh;
  background-color: var(--color-purple-light);
  border-radius: 14px;
  display: flex;
  margin: 3vh auto 1vh;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.img`
  max-width: 40%;
  height: auto;
  object-fit: contain;
`;

const StyledGoBackBtn = styled.button`
  position: absolute;
  margin-top: 2.4vh;
  margin-left: 0.3vh;
  height: 5.5vh;
  width: 5.5vh;
  background-color: transparent;
  border: none;
  display: flex;
  font-size: 5.5vh;
  justify-content: center;
  align-items: center;
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
    return <div>아이템을 찾을 수 없다.</div>;
  }

  const handleGoBack = () => {
    if (category) {
      navigate(`/${category.id}`);
    }
  };

  return (
    <Layout>
      <Container>
        <StyledGoBackBtn onClick={handleGoBack}>
          <GoChevronLeft />
        </StyledGoBackBtn>
        <HorizontalLine />
        <CategoryText>{item.name}</CategoryText>
        {item.img && (
          <ImageWrapper>
            <ImageContainer src={wasteCategoryItemsImages[item.img]} alt={item.name} />
          </ImageWrapper>
        )}
        <HorizontalLine />
        <CategoryText>배출방법</CategoryText>
        <Text>{item.disposalMethod}</Text>
      </Container>
    </Layout>
  );
};

export default DetailItems;
