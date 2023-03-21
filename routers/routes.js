const object = require('../controllers/data.js')
const express  = require('express');
const router = express.Router();


router.get('/', function (req, res) {  
  res.send('<h1>Notes App</h1>');  
});  

router.get('/notes', object.getNotes);

router.post('/addnote', object.addNote);

router.delete('/deletenote/:id', object.deleteNote);

router.patch('/updatenote/:id', object.updateNote);


module.exports = router;