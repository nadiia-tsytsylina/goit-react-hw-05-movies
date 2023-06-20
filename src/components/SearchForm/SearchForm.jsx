import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchFormBox,
  SearchFormInput,
  SearchFormButton,
} from 'components/SearchForm/SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Please input name for searching movies');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchFormBox onSubmit={handleSubmit}>
      <SearchFormInput
        value={query}
        onChange={handleChange}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <SearchFormButton type="submit">Search</SearchFormButton>
    </SearchFormBox>
  );
};

export default SearchForm;
