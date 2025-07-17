const express = require('express');
const threadsController = require('../Controllers/threads.controllers');

const router = express.Router();

router.post('/', threadsController.create);
router.get('/', threadsController.findAll);
router.get('/:id', threadsController.findOne);
router.put('/:id', threadsController.update);
router.delete('/:id', threadsController.delete);

module.exports = router;
