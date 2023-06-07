const asyncHandler = require(`express-async-handler`)
const Goal = require("../models/goalModel")

const getGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.find()
    res.status(200).json(goal)
})
const setGoals = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error(`Add some text field`)
    }

    const newGoal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(newGoal)

})
const putGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(404)
        throw new Error("Goal not found")
    } else {
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body.text, {new: true})
        res.status(200).json(updatedGoal)
    }
})
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(404)
        throw new Error("Goal not found")
    } else {
        const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedGoal)
    }
})


module.exports = {
    getGoals, setGoals, putGoals, deleteGoals
}