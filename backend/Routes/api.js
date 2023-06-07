const express = require("express")
const router = express.Router()
const goalsController = require("../controller/goalsController")

router.get("/get", goalsController.getGoals)
router.post("/post", goalsController.setGoals)
router.put("/put/:id", goalsController.putGoals)
router.delete("/delete/:id", goalsController.deleteGoals)

module.exports = router