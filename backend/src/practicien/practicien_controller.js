const pool = require('../../connection');
const queries = require('./practicien_queries');

// get all practiciens
const getAllPracticiens = (req, res) => {
    pool.query(queries.getAllPracticiens, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })

};

//Get Practicien by id
const getPracticienById = (req, res) => {

    const id = parseInt(req.params.id);

    //check if practicien exists or not
    pool.query(queries.getPracticienById, [id], (error, results) => {
        const nonPracticienfound = !results.rows.length;
        if (nonPracticienfound) {
            res.send("Practicien doesn't exist.");
        }

        else if (error) throw error;
        res.status(200).json(results.rows);
    });

};

module.exports = {
    getAllPracticiens,
    getPracticienById
}

