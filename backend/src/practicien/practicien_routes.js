const { Router } = require('express');
const controller = require('./practicien_controller');
const router =Router();

router.get("/", controller.getAllPracticiens);
router.get("/:id", controller.getPracticienById);



module.exports = router;