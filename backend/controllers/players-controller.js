// Import database
const knex = require('./../db')

// Retrieve all players
exports.playersAll = async (req, res) => {
  // Get all players from database
  knex
    .select('*') // select all records
    .from('players') // from 'players' table
    .then(userData => {
      // Send players extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving players: ${err}` })
    })
}

// Create new players
exports.playersCreate = async (req, res) => {
  // Add new players to database
  knex('players')
    .insert({ // insert new record, a players
      'id': req.body.id,
      'name': req.body.name,
      'age': req.body.age,
      'velocity': req.body.velocity
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `player ${req.body.name} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.name} players: ${err}` })
    })
}

// Remove specific players
exports.playersDelete = async (req, res) => {
  // Find specific players in the database and remove it
  knex('players')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `players ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} players: ${err}` })
    })
}

// Remove all players on the list
exports.playersReset = async (req, res) => {
  // Remove all players from database
  knex
    .select('*') // select all records
    .from('players') // from 'players' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'players list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting players list: ${err}.` })
    })
}