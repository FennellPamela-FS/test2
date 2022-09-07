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

router.get('/get/:id', (req, res) => {
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

router.post('/post', (req, res) => {
    const name = req.body.name;
    res.status(201).json({
        message: 'Using - POST',
        name: name,
    });
});

router.put('/put/:id', (req, res) => {
    const api = req.params.api;

})



// router.patch by ID, always
// router.delete by ID, always


module.exports = router;