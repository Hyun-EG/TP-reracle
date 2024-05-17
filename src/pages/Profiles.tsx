import { useSearchStore } from '@/lib/store/useSearchStore';

const Profiles = () => {
  const { searchHistory } = useSearchStore();

  return (
    <div>
      Profile
      <h2>최근 검색기록</h2>
      <br />
      {searchHistory.map((searchQuery, index) => (
        <div key={index}>{searchQuery}</div>
      ))}
    </div>
  );
};

export default Profiles;
