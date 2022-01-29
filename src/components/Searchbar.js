import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Searchbar.css';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchTerm}`);
  };

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          id='search'
          onChange={(e) => setSearchTerm(e.target.value)}
          required
          placeholder='...'
        />
      </form>
    </div>
  );
};

export default Searchbar;
