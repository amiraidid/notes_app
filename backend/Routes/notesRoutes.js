const express = require('express')
const noteController = require('../Controllers/noteControllers');
const { protect } = require('../Middleware/protect');

const router = express.Router();

router.route('/').get(noteController.notes)
router.route('/user-notes').get(noteController.userNotes)
router.route('/create-note').post(protect, noteController.creatingNotes)
router.route('/edit/:id').put(noteController.editingNotes)
router.route('/delete/:id').delete(noteController.deleteNote)

module.exports = router