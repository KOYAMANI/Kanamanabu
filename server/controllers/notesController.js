const Note = require('../models/noteModel');
const asyncHandler = require('express-async-handler')

const getNotes = asyncHandler(
    async(req, res) => {
        const notes = await Note.find({user: req.user._id});
        res.json(notes);
    }
);

const getNoteById = asyncHandler(
    async(req, res) => {
        console.log('getting a note')
        const note = await Note.findById(req.params.id);
        
        if(note){
            res.json(note);
            return;
        } else {
            res.status(404);

            throw new Error('Note not found');
        }
    }
);

const createNote = asyncHandler(
    async(req, res) => {
        const {title, content, category} = req.body;
        
        if (!title || !content || !category){
            res.status (400);
            throw new Error('Please fill out all the fields');
        } else {
            const note = new Note({ user: req.user._id, title, content, category });
            
            const createdNote = await note.save();
            
            res.status(201).json(createdNote);
        }
    }
);

const updateNote = asyncHandler(
    async(req, res) => {
        const {title, content, category} = req.body;

        const note = await Note.findById(req.params.id);

        // if(note.user.toString() !== req.user._id.toString){
        //     res.status(401);
        //     throw new Error('You dont have permission')
        // }

        if (note) {
            note.title = title;
            note.content = content;
            note.category = category;

            const updateNote = await note.save();
            res.json(updateNote);
        } else {
            throw new Error('Note not found');
        }
    }
);

const deleteNote = asyncHandler(
    async(req, res) => {

        const note = await Note.findById(req.params.id);

        // if(note.user.toString() !== req.user._id.toString){
        //     res.status(401);
        //     throw new Error('You dont have permission')
        // }

        if (note) {
            await note.remove();
            res.json({message: "Note removed"})
        } else {
            res.status(404);
            throw new Error('Note not found');
        }
    }
)

module.exports = { 
    getNotes, 
    getNoteById, 
    createNote,
    updateNote,
    deleteNote
 };