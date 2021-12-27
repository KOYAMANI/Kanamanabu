const express = require('express')
const {registerUser, loginUser, updateUserProfile} = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.route('/profile')
  .post(protect, updateUserProfile)


module.exports = router;