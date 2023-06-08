const express = require("express")
const router = express.Router()
const goalsController = require("../controller/goalsController")

router.get("/", goalsController.getGoals)
router.post("/", goalsController.setGoals)
router.put("/:id", goalsController.putGoals)
router.delete("/:id", goalsController.deleteGoals)

module.exports = router