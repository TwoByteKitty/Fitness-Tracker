var express = require('express');
var router = express.Router();
var workoutRoutineController = require('../controllers/workoutRoutineController.js');

/*
 * GET
 */
router.get('/', workoutRoutineController.list);

/*
 * GET
 */
router.get('/:id', workoutRoutineController.show);

/*
 * POST
 */
router.post('/', workoutRoutineController.create);

/*
 * PUT
 */
router.put('/:id', workoutRoutineController.update);

/*
 * DELETE
 */
router.delete('/:id', workoutRoutineController.remove);

module.exports = router;
