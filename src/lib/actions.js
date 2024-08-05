'use server'

import {saveMeal} from "@/src/lib/meals";
import {redirect} from "next/navigation";

export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }
    console.log("meal-->", meal)

    await saveMeal(meal)
    redirect('/meals')
}