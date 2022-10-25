const getAllPatients = "SELECT * FROM patient ORDER BY name ASC;";

const getPracticienByPatientId = "SELECT prac.* FROM patient pat INNER JOIN practicien prac ON prac.id = pat.practicien_id AND pat.id = $1";
const getPatientById = "SELECT * FROM patient WHERE id = $1";
const checkNameExists = "SELECT p FROM patient p WHERE p.name = $1";
const addPatient = "INSERT INTO patient (surname, name, birth_date, next_appointment, created_at, practicien_id) VALUES ($1, $2, $3, $4, $5, $6)";
const updatePatient = "UPDATE patient SET surname = $1, name = $2, birth_date = $3, next_appointment = $4, created_at = $5, practicien_id = $6 WHERE id = $7";
const deletePatient = "DELETE FROM patient WHERE id = $1";


module.exports = {
    getAllPatients,
    getPatientById,
    checkNameExists,
    addPatient,
    updatePatient,
    getPracticienByPatientId,
    deletePatient,
}