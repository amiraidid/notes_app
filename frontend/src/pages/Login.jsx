import { useContext, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"


export default function Login() {

    const [inputs, setInputs] = useState({})
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    
    const handleLogin = (e) => {
        axios.post('/auth/login', inputs)
        .then(res => {
            setUser(res.data.token)
            localStorage.setItem('user-token', res.data.token)
            toast.success(res.data.message)
            navigate('/')
        })
        .catch(error => toast.error(error.message))
        e.preventDefault()
    }

    return (
        <section className='flex flex-col justify-center items-center min-h-screen bg-white dark:bg-gray-900 w-full '>
            <h1 className='text-4xl text-black font-bold my-10 dark:text-white uppercase'>login</h1>

            <form onSubmit={handleLogin} className="max-w-sm mx-auto w-96 max-sm:w-72">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" onChange={(e) => setInputs({...inputs ,email: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" onChange={(e) => setInputs({...inputs, password: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            
        </section>
    )
}