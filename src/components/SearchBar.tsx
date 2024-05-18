import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { wasteCategories } from '@/lib/constants/wasteCategories';

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
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const matchedItems = wasteCategories
        .flatMap((category) =>
          category.items ? category.items.map((item) => ({ ...item, categoryId: category.id })) : [],
        )
        .filter((item) => item.name.includes(query));
      setSearchResults(matchedItems);
    } else {
      setSearchResults([]);
    }
  };

  const handleItemClick = (categoryId, itemId) => {
    navigate(`/${categoryId}/${itemId}`);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <StyledSearchContainer>
      <form onSubmit={(e) => e.preventDefault()}>
        <StyledSearchInput
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="검색어를 입력하세요"
        />
      </form>
      {searchResults.length > 0 && (
        <ResultsContainer>
          {searchResults.map((item) => (
            <ResultItem key={item.id} onClick={() => handleItemClick(item.categoryId, item.id)}>
              {item.name}
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </StyledSearchContainer>
  );
};

export default SearchBar;
