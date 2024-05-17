import { create } from 'zustand';
import { produce } from 'immer';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SearchState {
  searchHistory: string[];
  addSearchHistory: (searchQuery: string) => void;
  clearSearchHistory: () => void;
}

const MAX_SEARCH_HISTORY_LENGTH = 6;

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      searchHistory: [],
      addSearchHistory: (searchQuery) =>
        set(
          produce((state: SearchState) => {
            const existingIndex = state.searchHistory.findIndex((item: string) => item === searchQuery);
            if (existingIndex !== -1) {
              state.searchHistory.splice(existingIndex, 1);
            }
            state.searchHistory.unshift(searchQuery);
            if (state.searchHistory.length > MAX_SEARCH_HISTORY_LENGTH) {
              state.searchHistory.pop();
            }
          }),
        ),
      clearSearchHistory: () => set({ searchHistory: [] }),
    }),
    {
      name: 'search-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
