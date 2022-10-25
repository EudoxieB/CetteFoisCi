// Import
const pool = require('../../connection');
const queries = require('./queries');

//Get all Patients
const getAllPatients = (req, res) => {
    pool.query(queries.getAllPatients, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })

};

//Get Patient by id
const getPatientById = (req, res) => {

    const id = parseInt(req.params.id);

    //check if patient exists or not
    pool.query(queries.getPatientById, [id], (error, results) => {
        const nonPatientfound = !results.rows.length;
        if (nonPatientfound) {
            res.send("Patient doesn't exist.");
        }

        else if (error) throw error;
        res.status(200).json(results.rows);
    });

};

// add a new Patient
const addPatient = (req, res) => {
    const { surname, name, birth_date, next_appointment, created_at, practicien_id } = req.body;

    //add Patient to database
    pool.query(
        queries.addPatient,
        [surname, name, birth_date, next_appointment, created_at, practicien_id],
        (error, results) => {
            if (error) throw error;
            res.status(200).send("Patient created successfully.")
        }
    );
};

//update Patient
const updatePatient = (req, res) => {
    const id = parseInt(req.params.id);
    const { surname, name, birth_date, next_appointment, created_at, practicien_id } = req.body;

    //check if patient exists or not
    pool.query(queries.getPatientById, [id], (error, results) => {
        const nonPatientfound = !results.rows.length;
        if (nonPatientfound) {
            res.send("Patient doesn't exist.");
        }

        pool.query(queries.updatePatient, [surname, name, birth_date, next_appointment, created_at, practicien_id, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Patient updated successfully.");
        });

    });


};


// delete a Patient
const deletePatient = (req, res) => {
    const id = parseInt(req.params.id);

    //check if patient exists or not
    pool.query(queries.getPatientById, [id], (error, results) => {
        const nonPatientfound = !results.rows.length;
        if (nonPatientfound) {
            res.send("Patient doesn't exist.");
        }
        pool.query(queries.deletePatient, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Patient deleted successfully.");
        });
    });
};


//get name

const getPracticienByPatientId = (req, res) => {

    const id = parseInt(req.params.id);
    pool.query(queries.getPracticienByPatientId, [id], (error, results) => {
        const nonPatientfound = !results.rows.length;
        if (nonPatientfound) {
            res.send("Patient doesn't exist.");
        }

        else if (error) throw error;
        res.status(200).json(results.rows);
    });

};

module.exports = {
    getAllPatients,
    getPatientById,
    addPatient,
    updatePatient,
    deletePatient,
    getPracticienByPatientId,
}