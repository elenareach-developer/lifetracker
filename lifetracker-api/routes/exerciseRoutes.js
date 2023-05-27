
const express = require("express");
const router = express.Router()
const Exercise = require("../models/exercise")

router.post("/add", async function (req, res, next) {
  try {
    const exercise = await Exercise.create(req.body)
    return res.status(200).json({ exercise })
  } catch (err) {
    next(err)
  }
})

router.get("/find/:id", async function (req, res, next) {
    if(!req.params){ throw err}

  try {
    const exercise = await Exercise.fetchById({id:req.params})
    return res.status(201).json({ exercise })
  } catch (err) {
    next(err)
  }
})
router.get("/list/", async function (req, res, next) {
    try {
      const exercise = await Exercise.list(req.body)
      return res.status(201).json({ exercise })
    } catch (err) {
      next(err)
    }
  })

module.exports = router