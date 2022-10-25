const express = require ('express');
const pool = require("../../connection");
const router = express.Router();

router.post('/login', async (req, res)=> {
    try{
        const {username, password} = req.body;
        const users = await pool.query('SELECT * FROM users WHERE username = $1',[username]);
        if (users.rows.length === 0) return res.status(401).json({error : 'Username is incorrect'});

    }catch(error){}
})

module.exports = router;