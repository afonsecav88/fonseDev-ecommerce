import { Input } from '@mui/material';
import { useSearchContext } from '../../hooks/useSearchContext';

export const Search = () => {
  const { searchTermValue, setSearchTermValue } = useSearchContext();
  return (
    <Input
      className="search-input"
      id="search-input"
      value={searchTermValue}
      name="search-input"
      onChange={(e) => setSearchTermValue(e.target.value)}
      placeholder="  monitor, silver, casual ...    "
      autoComplete="off"
      disableUnderline
    />
  );
};
