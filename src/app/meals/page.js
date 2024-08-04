import MealsGrid from "@/src/components/meals/meals-grid"
import classes from "./page.module.css"
import Link from "next/link"
import { getMeals } from "@/src/lib/meals"


export default async function MealsPage() {
    const meals = await getMeals()

    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals , created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favourite recipe and cook it yourself</p>
                <p className={classes.cta}>
                    <Link href={'/meals/share'}>
                        Share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}