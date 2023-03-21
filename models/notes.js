const mongose = require('mongoose');

const NoteSchema = mongose.Schema({
    id: {
        type: Number,
        unique: true,
        // required: [true, 'Please enter id']
    },
    title:{
        type: String,
        // required: [true, 'Please provide title']
    },
    content:{
        type: String,
    },
    color:{
        type:String,
    },
    edit:{
        type:String,
    }
});


const data1 = mongose.model("notes", NoteSchema);

module.exports  = data1;