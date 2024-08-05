'use server'

import {saveMeal} from "@/src/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export async function shareMeal(prevState, formData) {

    function isInValidText(text) {
        return !text || text.trim() === ''
    }

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    // server-side validations
    if (isInValidText(meal.title)
        || isInValidText(meal.summary)
        || isInValidText(meal.instructions)
        || isInValidText(meal.creator)
        || isInValidText(meal.creator_email)
        || !meal.creator_email.includes('@')
        || !meal.image || meal.image.size === 0) {

        return {
            message: "Invalid input"
        }
        // throw new Error("Invalid Input")
    }

    await saveMeal(meal)

    // this is revalidated when you're in production build -> layout means it'll revalidate the child paths of
    // meals too
    revalidatePath('/meals', "layout")

    redirect('/meals')
}