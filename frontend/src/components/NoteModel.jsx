import { useContext, useState } from "react"
import { NoteContext } from "../context/NotesContext"

// eslint-disable-next-line react/prop-types
function NoteModel({setShowModal}) {

    const [inputs, setInputs] = useState({title: '', description: ''})
    const token = localStorage.getItem('user-token')
    const { createNote } = useContext(NoteContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        createNote(inputs, token)
        setInputs({title: '', description: ''})
        window.location.reload()
    }

    return (
        <div className={`z-50 absolute right-1/2 translate-x-1/2 bg-indigo-100 rounded-md shadow-xl lg:p-4 md:p-4 max-sm:w-80 h-80`}>
            
            <div className="flex justify-between items-center p-1">
                <h1 className="capitalize dark:text-black">Write your notes here...</h1>
                <button onClick={() => setShowModal(false)} className="text-black rounded-lg bg-indigo-200 p-1 hover:bg-indigo-200">close</button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3 w-96 md:w-[450px] max-sm:w-80 max-sm:items-center h-60 pb-2">
                <input type="text" name="title" placeholder="Title" onChange={(e) => setInputs({...inputs, title: e.target.value})} className="w-full max-sm:w-72 outline-none shadow-css p-2 border-2 rounded-lg dark:bg-gray-100 dark:border-gray-300  dark:text-black " required/>
                <textarea name="description" placeholder="write your note" onChange={(e) => setInputs({...inputs, description: e.target.value})} className="w-full max-sm:w-72 h-56 resize-none outline-none shadow-css p-2 border-2 rounded-lg dark:bg-gray-100 dark:border-gray-300  dark:text-black" required></textarea>
                <input type="submit" value="create" maxLength="100" className="p-2 rounded-lg text-white text-2xl bg-slate-600 dark:bg-green-300 dark:text-black"/>
            </form>

        </div>
        

    )
}

export default NoteModel