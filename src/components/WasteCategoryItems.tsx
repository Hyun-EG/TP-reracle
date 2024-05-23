import { wasteCategories } from '@/lib/constants/wasteCategories';
import { wasteCategoryItemsImages } from '@/lib/constants/wasteCategoryItemsImages';
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import {
  CategoryWrapper,
  CategroryGird,
  HorizontalLine,
  StyledCategoryText,
  StyledImg,
  StyledSlCarousel,
  StyledSlCarouselItem,
  StyledNavLink,
  CategoryName,
  CategoryContainer,
} from '@/styles/carouselStyle';
import { chunkArray } from '@/lib/utils/chunkArray';

const WasteCategoryItems = () => {
  const { categoryId } = useParams();
  const category = wasteCategories.find((category) => category.id === categoryId);

  if (!category || !category.items) {
    return <div>카테고리를 찾을 수 없습니다.</div>;
  }

  const chunkedItems = chunkArray(category.items, 9);

  return (
    <Layout>
      <CategoryContainer>
        <HorizontalLine />
        <StyledCategoryText>재활용품 세부 품목</StyledCategoryText>
        <StyledSlCarousel pagination mouse-dragging>
          {chunkedItems.map((chunk, index) => (
            <StyledSlCarouselItem key={index}>
              <CategroryGird>
                {chunk.map((item) => (
                  <div key={item.id}>
                    <StyledNavLink to={`/${categoryId}/${item.id}`}>
                      <CategoryWrapper>
                        {item.img && <StyledImg src={wasteCategoryItemsImages[item.img]} alt={item.name} />}
                      </CategoryWrapper>
                      <CategoryName>{item.name}</CategoryName>
                    </StyledNavLink>
                  </div>
                ))}
              </CategroryGird>
            </StyledSlCarouselItem>
          ))}
        </StyledSlCarousel>
      </CategoryContainer>
    </Layout>
  );
};

export default WasteCategoryItems;
