const getAllPracticiens = "SELECT * FROM practicien";
const getPracticienById = "SELECT * FROM practicien WHERE id = $1";

module.exports ={
    getAllPracticiens,
    getPracticienById,
}