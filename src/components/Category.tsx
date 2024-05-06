import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdElectricalServices, MdChair, MdMenuBook, MdBathtub } from 'react-icons/md';
import { IoUmbrellaSharp } from 'react-icons/io5';
import { GiDelicatePerfume, GiClothes } from 'react-icons/gi';

const CategroryGird = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const CategoryContainer = styled.div`
  background-color: var(--catories-btn-color);
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 0 auto;

  &:hover {
    background-color: var(--catories-btn-hover-color);
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
`;

const CategoryName = styled.div`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;
const IconWrapper = styled.div`
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
];

export const Category = () => {
  return (
    <>
      <h2>카테고리별 제품</h2>
      <CategroryGird>
        {categories.map((category) => (
          <StyledNavLink key={category.id} to={`/${category.id}`}>
            <CategoryContainer>
              <IconWrapper>{category.icon}</IconWrapper>
            </CategoryContainer>
            <CategoryName>{category.name}</CategoryName>
          </StyledNavLink>
        ))}
      </CategroryGird>
    </>
  );
};
