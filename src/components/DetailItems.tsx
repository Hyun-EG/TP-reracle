import { wasteCategories } from '@/lib/constants/wasteCategories';
import { useParams } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { wasteCategoryItemsImages } from '@/lib/constants/wasteCategoryItemsImages';
import { HorizontalLine, StyledImg } from '@/styles/carouselStyle';
import styled from 'styled-components';

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

const CategoryText = styled.span`
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
  margin-top: 5px;
  margin-left: 35px;
`;

const DetailItems = () => {
  const { categoryId, itemId } = useParams();
  const category = wasteCategories.find((category) => category.id === categoryId);
  console.log(category);
  if (!category) {
    return <div>카테고리를 찾을 수 없습니다.</div>;
  }

  const item = category.items && category.items.find((item) => item.id === itemId);

  if (!item) {
    return <div>아이템을 찾을 수 없습니다.</div>;
  }

  return (
    <Layout>
      <Container>
        <HorizontalLine />
        <CategoryText>{category.name}</CategoryText>
        <h2>{item.name}</h2>
        {item.img && <StyledImg src={wasteCategoryItemsImages[item.img]} alt={item.name} />}
        <HorizontalLine />
        <CategoryText>배출방법</CategoryText>
        <p>{item.disposalMethod}</p>
      </Container>
    </Layout>
  );
};

export default DetailItems;
