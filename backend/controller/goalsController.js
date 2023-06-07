const asyncHandler = require(`express-async-handler`)

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "ok get"})
})
const setGoals = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error(`Add some text field`)
    }

    res.status(200).json({message: `ok post`})

})
const putGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `ok put ${req.params.id}`})

})
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `ok delete ${req.params.id}`})
})


module.exports = {
    getGoals, setGoals, putGoals, deleteGoals
}