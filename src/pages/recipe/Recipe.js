import './Recipe.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Recipe = () => {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id;
  const { data: recipe, isPending } = useFetch(url);

  console.log(recipe);

  return (
    <div className='recipe'>
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  );
};

export default Recipe;
