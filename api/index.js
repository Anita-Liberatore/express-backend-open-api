const { getAllUsers } = require('./controllers/users-controller');
const { getPing } = require('./controllers/ping-controller')

module.exports = {
  getAllUsers,
  getPing
}