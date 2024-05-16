import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { categories } from '@/lib/constants/categories';
import { categoryImages } from '@/lib/constants/categoryImages';
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
} from '@/styles/carouselStyle';

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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
`;

export const Cate = () => {
  const chunkedCategories = [];
  const chunkSize = 9;

  for (let i = 0; i < categories.length; i += chunkSize) {
    chunkedCategories.push(categories.slice(i, i + chunkSize));
  }

  return (
    <CategoryContainer>
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
                    {category.img && <StyledImg src={categoryImages[category.img]} alt={category.name} />}
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

export default Cate;
