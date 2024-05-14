import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdElectricalServices, MdChair, MdMenuBook, MdBathtub } from 'react-icons/md';
import { IoUmbrellaSharp } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { GiDelicatePerfume, GiClothes } from 'react-icons/gi';
import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';

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

const CategoryIcon = styled.div`
  font-size: 2rem;
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

const categories = [
  { id: 'electronics', name: '가전제품', icon: <MdElectricalServices /> },
  { id: 'furnitures', name: '가구/인테리어', icon: <MdChair /> },
  { id: 'household', name: '생활용품', icon: <IoUmbrellaSharp /> },
  { id: 'books', name: '도서/문구', icon: <MdMenuBook /> },
  { id: 'cosmetics', name: '화장품', icon: <GiDelicatePerfume /> },
  { id: 'bathroom', name: '욕실용품', icon: <MdBathtub /> },
  { id: 'clothes', name: '의류', icon: <GiClothes /> },
  { id: 'etc', name: '기타', icon: <MdElectricalServices /> },
  { id: 'etc', name: '기타', icon: <MdElectricalServices /> },
  {
    id: 'etc',
    name: '기타',
    icon: <MdElectricalServices />,
  },
];

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
                    <CategoryIcon>{category.icon}</CategoryIcon>
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
