var workoutRoutineModel = require('../models/workoutRoutineModel.js');

/**
 * workoutRoutineController.js
 *
 * @description :: Server-side logic for managing workoutRoutines.
 */
module.exports = {

    /**
     * workoutRoutineController.list()
     */
    list: function (req, res) {
        workoutRoutineModel.find(function (err, workoutRoutines) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting workoutRoutine.',
                    error: err
                });
            }
            return res.json(workoutRoutines);
        });
    },

    /**
     * workoutRoutineController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        workoutRoutineModel.findOne({_id: id}, function (err, workoutRoutine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting workoutRoutine.',
                    error: err
                });
            }
            if (!workoutRoutine) {
                return res.status(404).json({
                    message: 'No such workoutRoutine'
                });
            }
            return res.json(workoutRoutine);
        });
    },

    /**
     * workoutRoutineController.create()
     */
    create: function (req, res) {
        console.log(req.body);
        var workoutRoutine = new workoutRoutineModel({
			name : req.body.name,
			exercises : req.body.exercises

        });

        workoutRoutine.save(function (err, workoutRoutine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating workoutRoutine',
                    error: err
                });
            }
            return res.status(201).json(workoutRoutine);
            //res.status(201).redirect('/choose');
        });
    },

    /**
     * workoutRoutineController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        workoutRoutineModel.findOne({_id: id}, function (err, workoutRoutine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting workoutRoutine',
                    error: err
                });
            }
            if (!workoutRoutine) {
                return res.status(404).json({
                    message: 'No such workoutRoutine'
                });
            }

            workoutRoutine.name = req.body.name ? req.body.name : workoutRoutine.name;
			workoutRoutine.exercises = req.body.exercises ? req.body.exercises : workoutRoutine.exercises;
			
            workoutRoutine.save(function (err, workoutRoutine) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating workoutRoutine.',
                        error: err
                    });
                }

                return res.json(workoutRoutine);
            });
        });
    },

    /**
     * workoutRoutineController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        workoutRoutineModel.findByIdAndRemove(id, function (err, workoutRoutine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the workoutRoutine.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
