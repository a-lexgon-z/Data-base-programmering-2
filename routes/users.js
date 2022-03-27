const express = require('express')
const router = express.Router()

// Getting all
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating Users
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        // id: req.body.id,
        // DateCreated: req.body.DateCreated
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json.apply({ message: err.message })
    }
    console.warn(xhr.responseText)
})

// Updating User
router.patch('/', (req, res) => {

})

// Delete user
router.delete('/:id', (req, res) => {

})

module.exports = router