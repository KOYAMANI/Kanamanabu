const express = require('express')
const { 
    getNotes, 
    getNoteById,
    createNote,
    updateNote, 
    deleteNote
} = require('../controllers/notesController')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/', protect, getNotes)
router.post('/create', protect, createNote)
router.route("/:id")
  .get(getNoteById)
  .put(updateNote)
  .delete(deleteNote)

module.exports = router;
