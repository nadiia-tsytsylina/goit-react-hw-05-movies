import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchFormBox,
  SearchFormInput,
  SearchFormButton,
} from 'components/SearchForm/SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('query'));

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      console.log('Please input tag for searching images');
      return;
    }
    setSearchParams({ query: query });
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
