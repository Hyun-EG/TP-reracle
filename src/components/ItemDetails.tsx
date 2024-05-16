import { categories } from '@/lib/constants/categories';
import { useParams } from 'react-router-dom';
import { Layout } from './layout/Layout';

const ItemDetails = () => {
  const { categoryId, itemId } = useParams();
  const category = categories.find((category) => category.id === categoryId);
  const item = category.items && category.items.find((item) => item.id === itemId);

  return (
    <Layout>
      <h2>{item.name}</h2>
      <img src={`/images/${item.img}.png`} alt={item.name} />
      <p>{item.disposalMethod}</p>
    </Layout>
  );
};

export default ItemDetails;
