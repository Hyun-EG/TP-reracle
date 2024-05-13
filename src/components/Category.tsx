import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdElectricalServices, MdChair, MdMenuBook, MdBathtub } from 'react-icons/md';
import { IoUmbrellaSharp } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { GiDelicatePerfume, GiClothes } from 'react-icons/gi';

const CategoryContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`;

const StyledSearchInput = styled.input`
  width: 85%;
  height: 2.5rem;
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
  gap: 0.7rem;
  padding-left: 0.7rem;
`;

const HorizontalLine = styled.div`
  width: 80%;
  height: 0.02rem;
  margin: 1.5rem auto 0;
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
];

export const Category = () => {
  return (
    <CategoryContainer>
      <SearchWrapper>
        <FaSearch />
        <StyledSearchInput placeholder="검색어를 입력하세요" />
      </SearchWrapper>
      <HorizontalLine />
      <StyledCategoryText>재활용품 분류</StyledCategoryText>
      <CategroryGird>
        {categories.map((category) => (
          <StyledNavLink key={category.id} to={`/${category.id}`}>
            <CategoryWrapper>
              <CategoryIcon>{category.icon}</CategoryIcon>
            </CategoryWrapper>
            <CategoryName>{category.name}</CategoryName>
          </StyledNavLink>
        ))}
      </CategroryGird>
    </CategoryContainer>
  );
};
