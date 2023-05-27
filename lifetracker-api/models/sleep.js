"use strict"

const db = require("../db");
const {NotFoundError} = require("../utils/errors")
const {validateFields} = require("../utils/validation")

class Sleep {
    static async create({sleep, user}){
        const {startTime, endTime} = sleep
        try{
            validateFields({required:["startTime","endTime"], obj:sleep, location:"sleep create"})
        }catch(err){
            throw err
        }
        
        const result = await db.query(
            `
            INSERT INTO sleep(start_time, end_time, user_id)
            VALUES ($1, $2, $3)
            RETURNING id,
                        start_time as "startTime",
                        end_time as "endTime",
                        user_id as "userId",
                        timestamp`,
            [startTime, endTime, user.id]
        ) 
        return result.rows[0]
    }
    static async fetchById(sleepId) {
    const results = await db.query(
      `
      SELECT id,
              start_time as "startTime",
              end_time as "endTime",
              user_id as "userId",
              timestamp
      FROM sleep
      WHERE id = $1
    `,
      [sleepId]
    )

    const sleep = results.rows[0]

    if (!sleep) {
      throw new NotFoundError("Sleep not found.")
    }

    return sleep
  }

  static async list({ user }) {
    const results = await db.query(
      `
      SELECT id,
              start_time as "startTime",
              end_time as "endTime",
              user_id AS "userId",
              timestamp
      FROM sleep
      WHERE user_id = $1
      ORDER BY start_time DESC
    `,
      [user.id]
    )

    const sleeps = results.rows

    return sleeps || []
  }

}
module.exports = Sleep
