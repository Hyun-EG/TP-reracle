import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { wasteCategories } from '@/lib/constants/wasteCategories';
import { useSearchStore } from '@/lib/store/useSearchStore';

const StyledSearchContainer = styled.div`
  position: relative;
  width: 37vh;
`;

const StyledSearchInput = styled.input`
  width: 37vh;
  height: 5vh;
  font-size: 2vh;
  border: none;
  font-family: var(--font-weight-medium);
  color: var(--color-gray-dark);
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const ResultsContainer = styled.ul`
  position: absolute;
  width: 37vh;
  height: auto;
  top: 5vh;
  list-style: none;
  margin-top: 1vh;
  max-height: 20vh;
  background-color: #ffffff;
  border: 1px solid var(--color-purple);
  border-radius: 0.5vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ResultItem = styled.li`
  padding: 1.2vh;
  font-size: 2vh;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<
    {
      categoryId: string;
      id: string;
      name: string;
      img?: string;
      disposalMethod?: string;
    }[]
  >([]);

  const resultContainerRef = useRef<HTMLUListElement | null>(null);
  const addSearchHistory = useSearchStore((state) => state.addSearchHistory);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (resultContainerRef.current && !resultContainerRef.current.contains(target)) {
        setSearchResults([]);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const matchedItems = wasteCategories
        .flatMap((category) =>
          category.items ? category.items.map((item) => ({ ...item, categoryId: category.id })) : [],
        )
        .filter((item) => item.name && item.name.includes(query));
      setSearchResults(matchedItems);
    } else {
      setSearchResults([]);
    }
  };

  const handleItemClick = (categoryId: string, itemId: string, itemName: string) => {
    navigate(`/${categoryId}/${itemId}`);
    addSearchHistory(itemName, categoryId, itemId);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchResults.length > 0) {
      const firstSearchResult = searchResults[0];
      handleItemClick(firstSearchResult.categoryId, firstSearchResult.id, firstSearchResult.name);
    }
  };

  return (
    <StyledSearchContainer>
      <form onSubmit={handleSubmit}>
        <StyledSearchInput
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="검색어를 입력하세요"
        />
      </form>
      {searchResults.length > 0 && (
        <ResultsContainer ref={resultContainerRef}>
          {searchResults.map((item) => (
            <ResultItem key={item.id} onClick={() => handleItemClick(item.categoryId, item.id, item.name)}>
              {item.name}
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </StyledSearchContainer>
  );
};

export default SearchBar;
