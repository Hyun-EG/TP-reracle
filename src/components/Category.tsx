import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdElectricalServices, MdChair, MdCleaningServices, MdMenuBook, MdSpa } from 'react-icons/md';

const CategroryGird = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const CategoryContainer = styled.div`
  background-color: #fef3c1;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: #fde68a;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
`;

const CategoryName = styled.div`
  margin-top: 0.5rem;
  font-size: 1.1rem;
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
  { id: 'furniture', name: '가구', icon: <MdChair /> },
  { id: 'household', name: '생활용품', icon: <MdCleaningServices /> },
  { id: 'books', name: '도서/문구', icon: <MdMenuBook /> },
  { id: 'cosmetics', name: '화장품', icon: <MdSpa /> },
];

export const Category = () => {
  return (
    <>
      <h2>카테고리별 제품</h2>
      <CategroryGird>
        {categories.map((category) => (
          <StyledNavLink key={category.id} to={`/category/${category.id}`}>
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
