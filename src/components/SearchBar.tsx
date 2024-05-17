import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findMatchingItem } from '@/components/findMatchingItem';
import { useSearchStore } from '@/lib/store/useSearchStore';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { addSearchHistory } = useSearchStore();

  const handleSearch = (event) => {
    event.preventDefault();
    const matchedItem = findMatchingItem(searchQuery);
    if (matchedItem) {
      navigate(`/${matchedItem.categoryId}/${matchedItem.id}`);
      addSearchHistory(searchQuery);
    } else {
      // 검색 결과 없음 처리
      alert('검색 결과가 없습니다.');
    }
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
    </form>
  );
};

export default SearchBar;
