import './Home.css';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

const Home = () => {
  const { data: recipes, isPending } = useFetch(
    'http://localhost:3000/recipes'
  );

  return (
    <div className='home'>
      {isPending && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;
