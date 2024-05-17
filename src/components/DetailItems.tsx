import { wasteCategories } from '@/lib/constants/wasteCategories';
import { useParams } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { wasteCategoryItemsImages } from '@/lib/constants/wasteCategoryItemsImages';
import { StyledImg } from '@/styles/carouselStyle';

const DetailItems = () => {
  const { categoryId, itemId } = useParams();
  const category = wasteCategories.find((category) => category.id === categoryId);
  if (!category) {
    return <div>카테고리를 찾을 수 없습니다.</div>;
  }

  const item = category.items && category.items.find((item) => item.id === itemId);

  if (!item) {
    return <div>아이템을 찾을 수 없습니다.</div>;
  }

  return (
    <Layout>
      <h2>{item.name}</h2>
      {item.img && <StyledImg src={wasteCategoryItemsImages[item.img]} alt={item.name} />}
      <p>{item.disposalMethod}</p>
    </Layout>
  );
};

export default DetailItems;
