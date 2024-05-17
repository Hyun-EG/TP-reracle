import { create } from 'zustand';

const MAX_SEARCH_HISTORY_LENGTH = 5;

export const useSearchStore = create((set) => ({
  searchHistory: JSON.parse(localStorage.getItem('searchHistory')) || [],
  addSearchHistory: (searchQuery) =>
    set((state) => {
      const newSearchHistory = [
        searchQuery,
        ...state.searchHistory.filter((item) => item !== searchQuery).slice(0, MAX_SEARCH_HISTORY_LENGTH - 1),
      ];
      localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
      console.log('새로운 searchHistory:', newSearchHistory);
      return {
        searchHistory: [...newSearchHistory],
      };
    }),
  clearSearchHistory: () => {
    localStorage.removeItem('searchHistory');
    set({ searchHistory: [] });
  },
}));
