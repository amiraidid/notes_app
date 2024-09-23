import './App.css'
import { Header,Footer } from './components'
import AllRoutes from './routes/AllRoutes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { UserContext } from './context/UserContext';
import { useEffect, useState } from 'react';
import { NotesProvider } from './context/NotesContext';


function App() {

  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('user-token') != null) {
      setUser(true)
    }
    setLoading(false)

  }, [])

  if (loading) return

  return (
    <>
      <NotesProvider>
        <UserContext.Provider value={{user, setUser}}>
            <Header />
            <AllRoutes />
            <Footer />
        </UserContext.Provider>
      </NotesProvider>

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
  )
}

export default App
