const express = require('express')
const {registerUser, loginUser, updateUserProfile, deleteUser} = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.delete('/delete', deleteUser)
router.route('/profile')
  .post(protect, updateUserProfile)

module.exports = router;