const express = require('express');
const controllers = require('../controllers/bouquetsControllers');
const { createSchema, updateSchema } = require('../schemas/bouquetsSchemas');
const validateBody = require('../middlewares/validateBody');

const router = express.Router();

router.get('/', controllers.getAll);
router.get('/:id', controllers.getById);
router.post('/', validateBody(createSchema), controllers.create);
router.put('/:id', validateBody(updateSchema), controllers.update);
router.delete('/:id', controllers.remove);

module.exports = router;
