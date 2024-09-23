import { Link } from "react-router-dom"
import { EssentialCard } from "../components"
import image from '../assets/img1.png'

export default function Home() {

    return (
        <main className='bg-white dark:bg-gray-900 w-full'>
            <div className="flex justify-between items-center max-sm:block md:mt-20 lg:mt-10  overflow-hidden max-sm:pt-32 max-sm:text-2xl">
                <div className="flex-1 md:mx-24 max-sm:mx-4 max-sm:text-center">
                    <h1 className='lg:text-5xl md:text-4xl text-black tracking-wider dark:text-white py-1'>Organize Your Thoughts with Ease</h1>
                    <h3 className="text-2xl md:text-xl max-sm:text-sm text-black tracking-wider dark:text-white max-sm:py-3">Your digital notebook, accessible anywhere, anytime.</h3>
                    <Link to='/notes'><button className="bg-indigo-600 py-2 px-5 rounded-md text-white my-5">See More</button></Link>
                </div>
                <div className="flex-1 ">
                    <img src={image} alt="" className="max-sm:w-full max-sm:h-64 max-sm:object-cover"/>
                </div>
            </div>

            <EssentialCard />


        </main>
    )
}
