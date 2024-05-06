import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from '@/components/layout/Layout';
import { productImages } from '@/lib/utils/productImages';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
`;

const ProductName = styled.div`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--catories-btn-color);
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 0 auto;
  width: 2.5rem;

  &:hover {
    background-color: var(--catories-btn-hover-color);
  }
`;
const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: auto;
`;

const ElectronicProducts = [
  { id: 'refrigerator', name: '냉장고', img: 'refrigerator' },
  { id: 'washing-machine', name: '세탁기', img: 'washingmachine' },
  {
    id: 'air-conditioner',
    name: '에어컨',
    img: 'airconditioner',
  },
  { id: 'tv', name: 'TV', img: 'tv' },
  { id: 'laptop', name: '노트북', img: 'laptop' },
  { id: 'smartphone', name: '스마트폰', img: 'smartphone' },
  {
    id: 'vacuum-cleaner',
    name: '청소기',
  },
  {
    id: 'microwave',
    name: '전자레인지',
  },
];

export const Electronics = () => {
  return (
    <>
      <Layout>
        <h2>가전제품 세부 품목</h2>
        <ProductGrid>
          {ElectronicProducts.map((product) => (
            <StyledNavLink key={product.id} to={`${product.id}`}>
              <ProductContainer>
                {product.img && <StyledImg src={productImages[product.img]} alt={product.name} />}
              </ProductContainer>
              <ProductName>{product.name}</ProductName>
            </StyledNavLink>
          ))}
        </ProductGrid>
      </Layout>
    </>
  );
};
