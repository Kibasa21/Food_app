import { createContext, useState } from "react";
import { useFetch } from '../../hook/useFetch';
import { fetchMeals } from '../../requests';


export const tableContext = createContext({
    meals: [],
    addMealToTable: () => { },
    updateMealQuantity: () => { }
})

export default function TableContextProvider({ children }) {

    const { fetchedData: fetchedMeals } = useFetch([], fetchMeals);
    const [meals, setMeals] = useState([]);

    function handleAddMeal(id) {
        const meal = fetchedMeals.find((meal) => meal.id === id);
        const prevMeals = [...meals.map((meal) => ({ ...meal }))];

        if (meals.findIndex((meal) => meal.id === id) === -1) {
            setMeals([...prevMeals, {
                id: meal.id,
                name: meal.name,
                price: meal.price,
                qnt: 1
            }]);
        }
        else {
            const index = prevMeals.findIndex((meal) => meal.id === id);
            prevMeals[index].qnt += 1;

            setMeals([...prevMeals.map((meal) => ({ ...meal }))]);
        }
    }

    function handleUpdateMealQuantity(type, id) {
        const prevMeals = [...meals.map((meal) => ({ ...meal }))];

        if (type === '-') {
            const index = prevMeals.findIndex((meal) => meal.id === id);
            prevMeals[index].qnt -= 1;

            if(prevMeals[index].qnt === 0){
                prevMeals.splice(index, 1);
            }
            
            setMeals([...prevMeals.map((meal) => ({ ...meal }))]);
        }
        else {
            const index = prevMeals.findIndex((meal) => meal.id === id);
            prevMeals[index].qnt += 1;

            setMeals([...prevMeals.map((meal) => ({ ...meal }))]);
        }
    }

    const ctxValue = {
        meals: meals,
        addMealToTable: handleAddMeal,
        updateMealQuantity: handleUpdateMealQuantity
    }

    return (
        <tableContext.Provider value={ctxValue}>
            {children}
        </tableContext.Provider>
    );
}