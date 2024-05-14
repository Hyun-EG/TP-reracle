import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from '@/components/layout/Layout';
import { detailItemImages } from '@/lib/constants/electronicproductImages';
import { electronicProducts } from '@/lib/constants/electronicproducts';

const DetailItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const ProductName = styled.div`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-yellow-light);
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 0 auto;
  width: 2.5rem;

  &:hover {
    background-color: var(--color-yellow);
  }
`;
const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: auto;
`;

export const Electronics = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: any) => {
    navigate(`${productId}`);
  };

  return (
    <Layout>
      <h2>가전제품 세부 품목</h2>
      <br />
      <DetailItemsGrid>
        {electronicProducts.map((product) => (
          <div key={product.id}>
            <ProductWrapper onClick={() => handleProductClick(product.id)}>
              {product.img && <StyledImg src={detailItemImages[product.img]} alt={product.name} />}
            </ProductWrapper>
            <ProductName>{product.name}</ProductName>
          </div>
        ))}
      </DetailItemsGrid>
    </Layout>
  );
};
