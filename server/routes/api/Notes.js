const express = require('express');
const router = express.Router();

// Load Note model
const Note = require('../../models/Note');

// Currently I didnot set authorization bearer token and just pass the middleware with next function. All API has public access.
let auth = (req, res, next) => {
    if (!req.get('Authorization')) {
        // res.status(401).send('Unauthorization access'); //Using Auth middleware prevent unauthorization access
        next();
    } else {
        // commonFunctions.decodeToken(req.get('Authorization'), function(user) {
        //  next();               //If user unauthorized then run next function
        // });
        next();
    }
};

// GET api/notes/test
// tests notes route
// Public Access
router.get('/test', (req, res) => res.send('Note route testing!'));

// GET api/notes
// Get all notes
// access Public
router.get('/', auth, (req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(404).json({
            nonotesfound: 'No Notes found'
        }));
});

// GET api/notes/:id
// Get single note by id
// access Public
router.get('/:id', auth, (req, res) => {
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(404).json({
            nonotefound: 'No Note found'
        }));
});

// GET api/notes
// add/save note
// access Public
router.post('/', auth, (req, res) => {
    Note.create(req.body)
        .then(note => res.json({
            msg: 'Note added successfully'
        }))
        .catch(err => res.status(400).json({
            error: 'Unable to add this note'
        }));
});

// GET api/notes/:id
// Update note
// access Public
router.put('/:id', auth, (req, res) => {
    Note.findByIdAndUpdate(req.params.id, req.body)
        .then(note => res.json({
            msg: 'Updated successfully'
        }))
        .catch(err =>
            res.status(400).json({
                error: 'Unable to update the Database'
            })
        );
});

// GET api/notes/:id
// Delete note by id
// access Public
router.delete('/:id', auth, (req, res) => {
    Note.findByIdAndRemove(req.params.id, req.body)
        .then(note => res.json({
            mgs: 'Note entry deleted successfully'
        }))
        .catch(err => res.status(404).json({
            error: 'No such a note'
        }));
});

module.exports = router;