"use strict"

const db = require("../db");
const {NotFoundError} = require("../utils/errors")
const {validateFields} = require("../utils/validation")

class Nutrition{
    static async create({nutrition, user}){
        const {name, category, quantity, clories, imageUrl} = nutrition
        try{
            validateFields({required:["name","category"], obj:nutrition, location:"exercise create"})
        }catch(err){
            throw err
        }

        const result = await db.query(
            `INSERT INTO nutrition (name, category, quantity, clories, image_url, user_id)
            VALUES ($1, $2, $3, $4,$5, $6)
            RETURNING id, name, category, quantity, calories,image_url as "imageUrl", user_id as "userId", timestamp
            `,
            [name, category, quantity || 1, calories, imageUrl, user.id ]
        )
        return results.rows[0]
    }
static async fetchById(nutritionId){
    const results = await db.query(
        `SELECT  id, name, category, quantity, clories, image_url as "imageUrl",  user_id as "userId",timestamp
        FROM nutrition
        WHERE id=$1`,
        [nutritionId]
    )
    const nutrition = result.row[0]
    if(!nutrition){
        throw new NotFoundError("Nutrition not found")
    }
}
static async list ({user}){
    const results = await db.query(`
    SELECT id, name, duration, intensity, user_id as userId", timestamp
    FROM exercises
    WHERE id = $1
    ORDER BY timestamp DESC`,
    [user.id]
    )
    const nutrition = results.rows
    return nutrition || []
}

}

module.exports = Nutrition