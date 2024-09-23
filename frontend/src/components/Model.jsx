import { useContext, useState } from "react"
import { NoteContext } from "../context/NotesContext"

// eslint-disable-next-line react/prop-types
const Model = ({id, title, description, setShowNote}) => {
    const { updateNote } = useContext(NoteContext)
    const [inputs, setInputs] = useState({title: title, description: description})

    const handleEdit = () => {
        updateNote(id, inputs)
        setInputs({})
    }

    return (
        <div className={`absolute right-1/2 translate-x-1/2 bg-indigo-100 rounded-md shadow-xl lg:p-4 md:p-4 max-sm:w-80 h-80 -mt-36`}>
            
            <div className="flex justify-between items-center p-1">
                <h1 className="capitalize dark:text-black">updating</h1>
                <button onClick={() => setShowNote(false)} className="text-black rounded-lg bg-indigo-200 p-1 hover:bg-indigo-200">close</button>
            </div>

            <form onSubmit={handleEdit} className="flex flex-col items-start gap-3 w-96 md:w-[450px] max-sm:w-80 max-sm:items-center h-60 pb-2">
                <input type="text" name="title" placeholder="Title" value={inputs.title} onChange={(e) => setInputs({...inputs, title: e.target.value})}  className="w-full max-sm:w-72 outline-none shadow-css p-2 border-2 rounded-lg dark:bg-gray-100 dark:border-gray-300  dark:text-black " required/>
                <textarea name="description" placeholder="write your note" value={inputs.description} onChange={(e) => setInputs({...inputs, description: e.target.value})} className="w-full max-sm:w-72 h-56 resize-none outline-none shadow-css p-2 border-2 rounded-lg dark:bg-gray-100 dark:border-gray-300  dark:text-black" required></textarea>
                <input type="submit" value="update" maxLength="100" className="p-2 rounded-lg text-white text-2xl bg-slate-600 dark:bg-green-300 dark:text-black"/>
            </form>

        </div>
    )
}

export default Model