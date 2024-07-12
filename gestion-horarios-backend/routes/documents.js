const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const upload = require('../middlewares/upload');

router.post('/upload', upload.single('document'), documentController.uploadDocument);
router.get('/all', documentController.getAllDocuments);

module.exports = router;
