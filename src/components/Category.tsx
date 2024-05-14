import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';
import { categories } from '@/lib/constants/categories';
import { categoryImages } from '@/lib/constants/categoryImages';

const CategoryContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`;

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

const HorizontalLine = styled.div`
  width: 80%;
  height: 0.02rem;
  margin: 1rem auto 0;
  background-color: var(--color-purple);
`;

const StyledCategoryText = styled.span`
  font-size: 0.9rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
  margin-top: 0.4rem;
  margin-left: 2.2rem;
`;

const CategroryGird = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

const CategoryWrapper = styled.div`
  background-color: var(--color-yellow-light);
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: var(--color-yellow);
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
`;

const CategoryName = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
`;

const StyledSlCarousel = styled(SlCarousel)`
  width: 85%;
  margin: 0 auto;
  height: 80%;
`;

const StyledSlCarouselItem = styled(SlCarouselItem)`
  margin-bottom: 2rem;
`;

const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  max-width: 60%;
  height: auto;
`;

export const Category = () => {
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
