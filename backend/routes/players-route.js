// Import express
const express = require('express')

// Import players-controller
const playersRoutes = require('./../controllers/players-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all player
// In server.js, players route is specified as '/players'
// this means that '/all' translates to '/players/all'
router.get('/all', playersRoutes.playersAll)

// Add route for POST request to create new player
// In server.js, players route is specified as '/players'
// this means that '/create' translates to '/players/create'
router.post('/create', playersRoutes.playersCreate)

// Add route for PUT request to delete specific player
// In server.js, players route is specified as '/players'
// this means that '/delete' translates to '/players/delete'
router.put('/delete', playersRoutes.playersDelete)

// Add route for PUT request to reset playershelf list
// In server.js, players route is specified as '/players'
// this means that '/reset' translates to '/players/reset'
router.put('/reset', playersRoutes.playersReset)

// Export router
module.exports = router