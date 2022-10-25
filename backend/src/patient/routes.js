//import
const { Router } = require('express');
const controller = require('./controller');
const router =Router();

//get routes
router.get("/", controller.getAllPatients);
router.post("/", controller.addPatient);
router.get("/:id", controller.getPatientById);
router.put("/:id", controller.updatePatient);
router.delete("/:id", controller.deletePatient)

router.get("/practicien/:id", controller.getPracticienByPatientId);


module.exports = router;