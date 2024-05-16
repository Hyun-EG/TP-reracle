import { categories } from '@/lib/constants/categories';
import { categoryItemsImages } from '@/lib/constants/categoryItemsImages';
import { Link, useParams } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { StyledImg } from '@/styles/carouselStyle';

const CateItems = () => {
  const { categoryId } = useParams();
  const category = categories.find((category) => category.id === categoryId);

  if (!category) {
    return <div>카테고리를 찾을 수 없습니다.</div>;
  }

  return (
    <Layout>
      <h2>{category.name}</h2>
      {category.items &&
        category.items.map((item) => (
          <div key={item.id}>
            <Link to={`/${categoryId}/${item.id}`}>
              {item.img && <StyledImg src={categoryItemsImages[item.img]} alt={item.name} />}
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
    </Layout>
  );
};

export default CateItems;
