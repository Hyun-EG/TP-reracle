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

export const Paper = () => {
  const chunkedCategories = [];
  const chunkSize = 9;

  for (let i = 0; i < paper.length; i += chunkSize) {
    chunkedCategories.push(paper.slice(i, i + chunkSize));
  }

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
