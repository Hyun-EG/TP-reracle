export interface SearchState {
  searchHistory: string[];
  addSearchHistory: (searchQuery: string) => void;
  clearSearchHistory: () => void;
}
