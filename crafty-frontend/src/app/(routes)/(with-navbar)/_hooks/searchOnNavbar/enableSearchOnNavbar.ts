import { useEffect } from 'react';
import searchStore from './stores/search';

const useEnableSearchOnNavbar = () => {
  const { setEnableSearch } = searchStore();

  useEffect(() => {
    setEnableSearch(true);
  }, [setEnableSearch]);
};

export default useEnableSearchOnNavbar;
