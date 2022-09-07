const express = require('express');

const router = express.Router();

// router methods for al requests
router.get('/get', (req, res) => {
    res.status(200).json({
        message: 'Using - Get',
        metadata: {
            host: req.hostname,
            method: req.method,
        },
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        id: id,
        message: 'Using - GET by id',
        metadata: {
            host: req.hostname,
            method: req.method,
        },
    });
});

router.post('/', (req, res) => {
    const name = req.body.name;
    res.status(201).json({
        message: 'Using - POST',
        name: name,
    });
});

// router.put by ID, always
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        id: id,
        message: 'Using - PUT by id',
        metadata: {
            host: req.hostname,
            method: req.method,
        },
    });
});

// router.delete by ID, always
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        id: id,
        message: 'Using - DELETE by id',
        metadata: {
            host: req.hostname,
            method: req.method,
        },
    });
});






module.exports = router;