import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";


const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchMeals = async () => {

            const response = await fetch('https://react-http-fe1b6-default-rtdb.firebaseio.com/meals.json')
            const responseDATA = await response.json()
            console.log(responseDATA)

            const loadedMeals = []

            for (const key in responseDATA) {
                loadedMeals.push( {
                    id: key,
                    name: responseDATA[key].name,
                    description: responseDATA[key].description,
                    price: responseDATA[key].price
                })
            }

            setMeals(loadedMeals)
            setIsLoading(false)
        }

        fetchMeals()
    }, [])

    if (isLoading) {
       return  (
           <section>
               <p className={classes.MealsLoading}>Loading...</p>
           </section>)
    }

    const mealsList = meals.map(meal => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
        )
    )

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )

}

export default AvailableMeals