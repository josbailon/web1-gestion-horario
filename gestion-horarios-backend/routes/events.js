const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const upload = require('../middlewares/upload');

router.post('/create', upload.single('image'), eventController.createEvent);
router.get('/all', eventController.getAllEvents);
router.post('/upload-document', upload.single('document'), eventController.uploadDocument);

module.exports = router;
