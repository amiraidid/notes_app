import { useContext, useEffect, useState } from "react";
import { NoteModel } from "../components";
import { jwtDecode } from "jwt-decode";
import Model from "../components/Model";
import { NoteContext } from "../context/NotesContext";


export default function Notes() {

    const [showModal, setShowModal] = useState(false)
    const [showNote, setShowNote] = useState(false)
    const token = localStorage.getItem('user-token')
    const { getNotes, notes, deleteNote } = useContext(NoteContext)

    const decoded = jwtDecode(token);
    const currentUser = decoded.id;

    
    useEffect(() => {
        getNotes()
    }, [getNotes])


    return (
        <main className='bg-white dark:bg-gray-900 dark:text-gray-300 w-full mt-20  py-5 min-h-screen'>
            <button onClick={() => setShowModal(!showModal)} className="mx-12 bg-indigo-500 py-2 px-10 rounded-lg ">Create A Note</button>
            {showModal && <NoteModel setShowModal={setShowModal}/>}

            <section className="flex justify-between flex-wrap max-sm:block mx-12">
                <div className="grid lg:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2 gap-4 mt-16">

                    {
                        notes.length > 0 ? 
                        
                        (notes.map((note) => 
                            {
                                return note.user === currentUser &&
                                (<div key={note._id} className="bg-indigo-300 p-4 text-black rounded-lg shadow-lg w-full h-fit">
                                    <h1 className="text-2xl py-2 ">{note.title}</h1>
                                    <p>{note.description}</p>
                                    <div className="flex justify-end gap-3 mx-3">
                                        <button onClick={() => deleteNote(note._id)} className="text-2xl text-indigo-700 cursor-pointer hover:text-indigo-500"><i className="bi bi-trash"></i></button>
                                        <button onClick={() =>  setShowNote(!showNote)} className="text-2xl text-red-600 cursor-pointer hover:text-red-800"><i className="bi bi-pencil-square"></i></button>
                                        {showNote && <Model id={note._id} title={note.title} description={note.description} setShowNote={setShowNote} />}
                                    </div>
                                </div>)
                            })
                        )
                        : (<div className="text-xl mx-auto">You Dont have any Notes at moment please create it....</div>)
                    }
                </div>
            </section>

            
        </main>
    )
}
