import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function SearchContact({ onSearch }) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextField
      label="Search by First Name"
      variant="outlined"
      value={searchKeyword}
      onChange={handleSearchChange}
    />
  );
}

export default SearchContact;
