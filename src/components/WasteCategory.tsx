import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { wasteCategories } from '@/lib/constants/wasteCategories';
import { wasteCategoryImages } from '@/lib/constants/wasteCategoryImages';
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
  StyledNavLink,
} from '@/styles/carouselStyle';
import { chunkArray } from '@/lib/utils/chunkArray';
import SearchBar from './SearchBar';

const StyledSearchInput = styled.input`
  width: 85%;
  height: 2.2rem;
  font-size: 1.2rem;
  border: none;
  font-family: var(--font-weight-medium);
  color: var(--color-gray-dark);
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const SearchWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 0.9rem;
  border: 0.02rem solid var(--color-purple);
  gap: 0.8rem;
  padding-left: 0.7rem;
`;

export const WasteCategory = () => {
  const chunkedCategories = chunkArray(wasteCategories, 9);

  return (
    <CategoryContainer>
      <SearchBar />
      <SearchWrapper>
        <FaSearch />
        <StyledSearchInput placeholder="검색어를 입력하세요" />
      </SearchWrapper>
      <HorizontalLine />
      <StyledCategoryText>재활용품 분류</StyledCategoryText>
      <StyledSlCarousel pagination mouse-dragging>
        {chunkedCategories.map((chunk, index) => (
          <StyledSlCarouselItem key={index}>
            <CategroryGird>
              {chunk.map((category) => (
                <StyledNavLink key={category.id} to={`/${category.id}`}>
                  <CategoryWrapper>
                    {category.img && (
                      <StyledImg src={wasteCategoryImages[category.img]} alt={category.name} />
                    )}
                  </CategoryWrapper>
                  <CategoryName>{category.name}</CategoryName>
                </StyledNavLink>
              ))}
            </CategroryGird>
          </StyledSlCarouselItem>
        ))}
      </StyledSlCarousel>
    </CategoryContainer>
  );
};

export default WasteCategory;
