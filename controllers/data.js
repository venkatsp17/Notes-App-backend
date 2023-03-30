const Note = require('../models/notes.js')

exports.getNotes = async(req, res) =>{
    try{
        const data = await Note.find();
        if(!data){
            res.send("No Data found!!");
        }
        res.send(data);
    }
    catch(err){
        res.send(err);
    }
};

exports.addNote = async (req, res) =>{
    try{
        const data = req.body;
        const response = await Note.create(data);
        console.log(response);
        if(!response){
            res.send("Data not created");
        }
        res.send("Data created");
    }
    catch(err){
        res.send(err);
    }
}

exports.deleteNote = async (req, res) =>{
    try{
        const response = await Note.findByIdAndDelete(req.params.id);
        if(!response){
            res.send("Data not deleted!!");
        }
        res.send("Data deleted");
    }
    catch(err){
        res.send(err);
    }
}
// brew services start mongodb-community@6.0

exports.updateNote = async (req, res) =>{
    try{
        const data = req.body;
        const response = await Note.findByIdAndUpdate(req.params.id, {"id": data["id"],"title":data["title"],"content":data["content"],"color":data["color"],"edit":data["edit"]});
        if(!response){
            res.send("Data not updated!!");
        }
        res.send("Data updated");
    }
    catch(err){
        res.send(err);
    }
}