import styles from './Meals.module.css';

import { useEffect, useState } from "react";
import { fetchMeals } from "../../http";
import MealItem from './MealItem/MealItem';

function Meals() {
    
    const [meals, setMeals] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function getMeals() {
            setLoading(true);

            try {
                const fetchedMeals = await fetchMeals();
                setMeals(fetchedMeals);
            } catch(err) {
                setError(err.message);
            }

            setLoading(false);
        }

        getMeals();

    }, []);

    function getMealItems() {
        return meals.map((meal) => {
            return (
                <MealItem 
                    key={meal.id}
                    name={meal.name}
                    price={meal.price}
                    description={meal.description}
                    image={meal.image} 
                />
            )
        });
    }

    return (
        <>
            {isLoading && <div><p>Loading data...</p></div>}
            {error && <div><p>{error}</p></div>}
            {meals && 
                <div id={styles['meals']}>
                    {getMealItems()}
                </div>
            }
        </>
    )
}


export default Meals;