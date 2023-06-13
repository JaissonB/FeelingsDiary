const { Router } = require('express');
const NotesController = require('../controllers/NotesController');

const router = Router();

router.post('/messages', NotesController.storageMessage);

router.post('/verifyCategory', NotesController.verifyCategory);

router.get('/conversations', NotesController.readAll);

router.get('/conversations/:id', NotesController.readConversation);

module.exports = router;