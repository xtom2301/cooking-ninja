import { useLocation } from 'react-router-dom';
import './Search.css';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url = 'http://localhost:3000/recipes?q=' + query;
  const { isPending, data: recipes } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {isPending && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Search;
