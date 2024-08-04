import MealsGrid from "@/src/components/meals/meals-grid"
import classes from "./page.module.css"


export default function MealsPage() {
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
                <MealsGrid meals={[]} />
            </main>
        </>
    )
}