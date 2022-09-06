import { Link } from "react-router-dom";

export const NoMatch = () => {
    return (
        <div className='back'>
            <div className='text-center font-bold tracking-wide text-pink-700 md:text-9xl text-8xl m-6 mt-32 mb-20'>
                <h2 className=''>404</h2>
                <code className=''>Not Found</code>
            </div>
            <Link to='/'>
                <button id='font' className='mt-10 inset-0 m-auto block w-40 h-24 text-3xl sm:text-4xl text-yellow-400 border-8 border-yellow-400 hover:bg-yellow-700 rounded-xl bg-yellow-600 transition ease-in delay-150 hover:scale-110 duration-300'>Restart</button>
            </Link>
        </div>
    )
}