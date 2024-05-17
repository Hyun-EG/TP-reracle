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
  width: 40vh;
  height: 7vh;
  font-size: 3vh;
  border: none;
  background-color: transparent;
  font-family: var(--font-weight-medium);
  color: var(--color-gray-dark);
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const SearchWrapper = styled.div`
  width: 43vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 2vh;
  border: 1px solid var(--color-purple);
  gap: 1.5vh;
  padding-left: 2.5vh;
`;

export const WasteCategory = () => {
  const chunkedCategories = chunkArray(wasteCategories, 9);

  return (
    <CategoryContainer>
      <SearchWrapper>
        <FaSearch />
        {/* <SearchBar /> */}
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
