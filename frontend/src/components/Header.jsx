import { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export default function Header() {

    const [show, setShow] = useState(true);
    const [showUserModal, setShowUserModal] = useState(false)
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false);
    const { user } = useContext(UserContext)

    useEffect(() => {
        localStorage.setItem('user-Modal', JSON.stringify(showUserModal))
    }, [showUserModal])

    useEffect(() => {
        localStorage.setItem('theme', theme)
        if (theme) {
            document.documentElement.classList.add('light')
        }else {
            document.documentElement.classList.add('dark')
        }
    }, [theme])


    const ThemeFunc = () => {
        setTheme(!theme)
        window.location.reload()
    }

    const handleSignOut = () => {
        localStorage.removeItem('user-token')
        window.location.reload()
    }

    return (
        <>
            <header>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="./favicon-32x32.png" className="h-8" alt="Notes Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Notes</span>
                        </Link>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button onClick={() => ThemeFunc()} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                {
                                    theme ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                                            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                                </svg>)
                                }
                                
                            </button>


                            <div className='flex justify-center gap-2'>
                                {
                                    user ? (
                                        <>
                                            <button onClick={() => setShowUserModal(!showUserModal)} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 max-sm:hidden max-md:hidden'>username</button>
                                        </>
                                        
                                    ) : (
                                        <>
                                            <Link to='login'><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 max-sm:hidden max-md:hidden'>Login</button></Link>
                                            <Link to='signup'><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 max-sm:hidden max-md:hidden'>Get Started</button></Link>
                                        </>

                                    )
                                }
                            </div>

                            <button onClick={() => setShow(!show)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                        </div>
                        <div className={`items-center justify-between ${show ? 'hidden' : 'block'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li><NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink></li>
                                <li><NavLink to="notes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notes</NavLink></li>
                                {
                                    user ? (
                                        <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 lg:hidden md:hidden'>username</button>

                                    ) : (
                                        <>
                                            <Link to='login'><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 lg:hidden md:hidden'>Login</button></Link>
                                            <Link to='signup'><button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 lg:hidden md:hidden'>Create an Account</button></Link>
                                        </>

                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className={`${showUserModal ? 'flex' : 'hidden'} flex-col items-center w-52 p-4 rounded-md bg-slate-200 absolute top-20 right-0 dark:bg-gray-700 shadow-css m-3`}>
                <h1 className="text-2xl px-2 py-1 dark:text-white capitalize">abdijabar</h1>
                <button className="bg-indigo-500 py-2 px-4 rounded-lg text-white hover:bg-indigo-700">change Password</button>
                <button onClick={handleSignOut} className="py-2 px-4 mt-2 border-2 border-gray-500 rounded-lg hover:scale-75 dark:text-white transition-all">Sign Out</button>
            </div>
        </>

    )
}
