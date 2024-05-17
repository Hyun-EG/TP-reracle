import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findMatchingItem } from '@/components/findMatchingItem';
import { useSearchStore } from '@/lib/store/useSearchStore';
import styled from 'styled-components';

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

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { addSearchHistory } = useSearchStore();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
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
      <StyledSearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
    </form>
  );
};

export default SearchBar;
