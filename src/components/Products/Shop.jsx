import { useFetch } from '../../hook/useFetch';
import { fetchMeals } from '../../requests';
import Product from './Product';

export default function Shop() {

    const { isFetching, error, fetchedData: fetchedMeals } = useFetch([], fetchMeals);

    return (
        <ul id="meals">
            {
                isFetching ?
                
                    (<p>Setting up our menu...</p>) :

                    fetchedMeals.map((meal) => (
                        <li className="meal-item" key={meal.id}>
                            <Product {...meal} />
                        </li>
                    ))
            }
        </ul>
    );
}