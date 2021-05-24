const router = require('express').Router();
const client = require('../database/psqlconn');
router.get('/location', async (req, res) => {
    client.query("SELECT * FROM public.location", (error, response) => {
        if (error) {
            console.log(error.stack);
        } else {
            console.log(response.rows);
            res.json(response.rows[0]);
        }
    });
});
router.get('/practicioner', async (req, res) => {
    client.query("SELECT * FROM public.practitioner", (error, response) => {
        if (error) {
            console.log(error.stack);
        } else {
            console.log(response.rows);
            res.json(response.rows[0]);
        }
    });
});
router.get('/services', async (req, res) => {
    client.query("SELECT * FROM public.services", (error, response) => {
        if (error) {
            console.log(error.stack);
        } else {
            console.log(response.rows);
            res.json(response.rows[0]);
        }
    });

});

module.exports = router;