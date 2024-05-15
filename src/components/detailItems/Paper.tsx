import { Layout } from '../layout/Layout';
import { paper } from '@/lib/constants/paper';
import {
  CategoryContainer,
  HorizontalLine,
  StyledCategoryText,
  CategroryGird,
  CategoryWrapper,
  CategoryName,
  StyledSlCarousel,
  StyledSlCarouselItem,
  StyledImg,
} from '@/styles/carousel';
import { useNavigate } from 'react-router-dom';
import { paperImages } from '@/lib/constants/paperImages';
import { chunkArray } from '@/lib/utils/chunkArray';

export const Paper = () => {
  const chunkedCategories = chunkArray(paper, 9);
  const navigate = useNavigate();
  const handleDetailItemClick = (categoryId: string) => {
    navigate(`${categoryId}`);
  };

  return (
    <Layout>
      <CategoryContainer>
        <HorizontalLine />
        <StyledCategoryText>재활용품 세부 품목</StyledCategoryText>
        <StyledSlCarousel pagination mouse-dragging>
          {chunkedCategories.map((chunk, index) => (
            <StyledSlCarouselItem key={index}>
              <CategroryGird>
                {chunk.map((category) => (
                  <div key={category.id}>
                    <CategoryWrapper onClick={() => handleDetailItemClick(category.id)}>
                      {category.img && <StyledImg src={paperImages[category.img]} alt={category.name} />}
                    </CategoryWrapper>
                    <CategoryName>{category.name}</CategoryName>
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
