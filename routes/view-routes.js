const express = require("express");
const router = express.Router();
var workoutRoutineModel = require('../models/workoutRoutineModel.js');


router.get(["/", "/create"], (req, res) => {




    res.render("create");
});


router.get("/choose", (req, res) => {
    workoutRoutineModel.find(function (err, workoutRoutines) {
        console.log(workoutRoutines);
        if (err) {
            return res.status(500).json({
                message: 'Error when getting workoutRoutine.',
                error: err
            });
        }
        res.render('choose', { routines: workoutRoutines });
    });
});


router.get("/track/:id", (req, res) => {
    var id = req.params.id;
    workoutRoutineModel.findOne({ _id: id }, function (err, workoutRoutine) {
        console.log(workoutRoutine);
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
        res.render("track", { routine: workoutRoutine });
    });




});


router.get("/edit/:id", (req, res) => {
    var id = req.params.id;
    workoutRoutineModel.findOne({ _id: id }, function (err, workoutRoutine) {
        console.log(workoutRoutine);
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
        res.render("edit", { routine: workoutRoutine });
    });
});

module.exports = router;