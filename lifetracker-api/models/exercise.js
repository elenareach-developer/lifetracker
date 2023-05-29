"use strict"

const db = require("../db");
const {NotFoundError, BadRequestError} = require("../utils/errors");
const {validationFields} = require("../utils/validation");


class Exercise{
    static async create({exercise, user}){
        const {name, duration, intensity} = exercise
        try{
            validationFields({required:["name","duration","intensity"], obj:exercise, location:"exercise create"})
        }catch(err){
            throw err
        }
    
    const results = await db.query(
        `INSERT INTO exercises (name, duration, intencity, user_id)
        VALUES ($1, $2, $3, $4)
        RETURNIN id, name, category, duration, intensity, user_id AS "userId", timestamp`,
        [name, duration,intensity, user.id]
    )
    return results.rows[0]
}
static async fetchByUserId(userId){
    if(!userId){
        throw new BadRequestError("User id is required")
    }

    const results = await db.query(
        `SELECT id, name, category,  duration, intensity, user_id as userId", timestamp
        FROM exercises
        WHERE user_id = $1`,
        [userId]
    )
    const exercises = results.rows
    if(!exercises){
        throw new NotFoundError("Exercise not found")
    }
    return exercises
}

static async list ({user}){
    const results = await db.query(`
    SELECT id, name, duration, intensity, user_id as userId", timestamp
    FROM exercises
    WHERE user_id = $1
    ORDER BY timestamp DESC`,
    [user.id]
    )
    const exercises = results.rows
    return exercises || []
}

}

module.exports = Exercise