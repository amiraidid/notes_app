const Notes = require('../Models/notesModel') 
const User = require('../Models/userModel.js')


const notes = async (req, res) => {
    try {
        const note = await Notes.find({})
        res.status(200).json({found: note.length, notes: note})
    } catch (error) {
        res.status(404).json({message: "Error"})
    }
}

const creatingNotes = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        if (!user) {
            return res.status(400).json({message: 'User Not Found'})
        }
        req.body.user = req.user.id;
        await Notes.create(req.body)
        res.status(200).json({message: "Note have been created..."})
    } catch (error) {
        res.status(404).json({message: "Error"})
    }
};

const userNotes = async(req, res) => {
    try {
        const id = req.user
        console.log(req.user)
        const userNotes = await Notes.find({user:id})
        res.status(200).json({userNotes})

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const editingNotes = async(req, res) => {
    const { id } = req.params
    const note = req.body;
    try {
        await Notes.findByIdAndUpdate(id, note, { new: true })
    } catch (error) {
        res.status(404).json({message: "Error"})
    }
}

const deleteNote = async(req, res) => {
    const { id } = req.params
    try {
        const note = await Notes.findOneAndDelete(id)
        res.status(200).json({message: "Note has been deleted"})
    } catch (error) {
        res.status(404).json({message: 'Couldn\'t able to delete this Note...'})
    }
} 





module.exports = { creatingNotes, notes, userNotes, deleteNote, editingNotes }