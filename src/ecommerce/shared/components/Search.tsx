import { Input } from '@mui/material';
import { useSearchContext } from '../../hooks/useSearchContext';

export const Search = () => {
  const { searchTermValue, setSearchTermValue } = useSearchContext();
  return (
    <Input
      className="search-input"
      id="search"
      value={searchTermValue}
      name="search"
      onChange={(e) => setSearchTermValue(e.target.value)}
      placeholder="      monitor, silver, casual ...    "
      autoComplete="off"
      disableUnderline
    />
  );
};
