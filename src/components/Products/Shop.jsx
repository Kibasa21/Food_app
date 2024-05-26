import { useFetch } from '../../hook/useFetch';
import { fetchMeals } from '../../requests';
import Product from './Product';

export default function Shop() {

    const { isFetching, error, fetchedData: fetchedMeals } = useFetch([], fetchMeals);

    if (error) {
        return (
            <p id='error'>
                <h1>An error ocurred, we'll be right back!</h1>
            </p>
        );
    }

    return (
        <ul id="meals">
            {
                isFetching ?

                    (
                        <div id='fetching'>
                            <h1>Setting our menu up...</h1>
                        </div>
                    ) :

                    fetchedMeals.map((meal) => (
                        <li className="meal-item" key={meal.id}>
                            <Product {...meal} />
                        </li>
                    ))
            }
        </ul>
    );
}