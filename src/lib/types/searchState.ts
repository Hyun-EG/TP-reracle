export interface SearchState {
  searchHistory: string[];
  addSearchHistory: (searchQuery: string, categoryId: string, itemId: string) => void;
  clearSearchHistory: () => void;
}
