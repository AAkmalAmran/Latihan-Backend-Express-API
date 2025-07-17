const express = require('express');
const komentarController = require('../Controllers/komentar.controllers');

const router = express.Router();

router.post('/', komentarController.createKomentar);
router.get('/', komentarController.getKomentars);
router.get('/:id', komentarController.getKomentarById);
router.get('/thread/:threadId', komentarController.getKomentarByThreadId);
router.delete('/:id', komentarController.deleteKomentar);
router.put('/:id', komentarController.updateKomentar);

module.exports = router;