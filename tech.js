var express = require('express');
const conn = require('../public/javascripts/dbconnect');
var router = express.Router();

router.get('/add', function(req, res, next) {
    res.render('addtech', { title: 'Add Technician' });
})

router.get('/list', function(req, res, next) {
    res.render('listtech', { title: 'Technician List' });
})

router.post('/add', function(req, res, next) {
    conn.query('INSERT INTO technicians SET ?', req.body, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/tech/list');
    })
})

router.put('/update', function(req, res, next) {
    conn.query('UPDATE techs SET ? WHERE id = ?', [req.body, req.body.id], (err, result) => {
        if (err) {    
            console.log(err);
            return;
        }
        res.redirect('/tech/list');
    })
})

router.delete('/delete/:id', function(req, res, next) {
    conn.query('DELETE FROM techs WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/tech/list');
    })
})

module.exports = router;
