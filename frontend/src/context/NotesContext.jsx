import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const NoteContext = createContext();

// eslint-disable-next-line react/prop-types
export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    // Get all notes
    const getNotes = () => {
        axios
        .get("/notes")
        .then((res) => {
            setNotes(res.data.notes);
        })
        .catch((error) => console.log(error));
    };

    // Create a new note
    const createNote = (newNote, token) => {
        if (!newNote.title || !newNote.description) {
        return { message: "Please fill all the fields" };
        }

        axios
        .post("/notes/create-note", newNote, {
            headers: { authorization: token },
        })
        .then((res) => {
            toast.success(res.data.message);
            setNotes((prevNotes) => [...prevNotes, newNote]); // Update state properly
        })
        .catch((error) => toast.error(error.message));
    };

    // Update an existing note
    const updateNote = async (id, updatedNote) => {
        try {
        const res = await fetch(`/notes/edit/${id}`, {
            method: "PUT", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedNote),
        });
        const data = await res.json();
        if (res.ok) {
            toast.success(data.message);
            // Optionally, update the notes state to reflect the change
            setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, ...updatedNote } : note
            )
            );
        } else {
            throw new Error(data.message);
        }
        } catch (error) {
        toast.error(error.message);
        }
    };

  // Delete a note
    const deleteNote = (id) => {
        axios
        .delete(`/notes/delete/${id}`)
        .then((res) => {
            toast.success(res.data.message);
            setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id)); 
        })
        .catch((error) => toast.error(error.message));
    };

    return (
        <NoteContext.Provider
        value={{ notes, getNotes, createNote, updateNote, deleteNote }}
        >
        {children}
        </NoteContext.Provider>
    );
};
