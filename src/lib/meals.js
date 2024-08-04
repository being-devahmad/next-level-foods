import sql from "better-sqlite3"
import { resolve } from "styled-jsx/css"
const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    // throw new Error("Loading meals failed")
    return db.prepare('SELECT * FROM meals').all()
}

export async function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ? ').get(slug)
}