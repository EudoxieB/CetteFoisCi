const { Router } = require('express');
const router = Router();
const pool = require('../../connection');


router.get('/', async (req, res) => {
    try {
        const users = await pool.query('select * from users');
        res.json({users : users.rows});
    } catch(error){
        res.status(500).json({error:error.message});
    }

})

module.exports = router;