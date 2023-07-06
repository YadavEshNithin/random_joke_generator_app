import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {FaSpinner} from "react-icons/fa"

const Dialogbox = ({ dialog, setDialog, selectedCategory, loading, FetchJoke, joke }) => {
    return (
        <>
            {dialog &&

                <>
                    <div className="z-10 absolute md:ml-8 md:w-1/2  top-72 md:top-56 border shadow-2xl border-gray-200 border-none bg-gradient-to-r from-[#2a4e5e] to-[#11232a] text-white h-auto p-3 rounded-sm lg:rounded-lg">
                        <h1 className="font-bold text-3xl my-5 text-center capitalize">
                            {selectedCategory}
                        </h1>
                        <p
                            onClick={() => setDialog(!dialog)}
                            className="top-0 absolute right-0 p-2 "
                        >
                            <XMarkIcon className="h-10" />
                        </p>
                        <div className="border-2 border-black h-auto">
                            <div className="rounded-xl w-[90%] font-medium mt-2 mx-auto p-4 text-3xl text-gray-200">
                                {loading ? (
                                    <FaSpinner size={44} className=" border-spacing-6 animate-spin h-16 w-16 text-center mx-auto"/>
                                ) : (
                                    <p className="text-center">{`" ${joke.value} "`}</p>
                                )}
                            </div>
                            <button onClick={() => FetchJoke(selectedCategory)} className="bg-[#1d4ed8] px-4 py-2 text-center  w-fit md:w-96  hover:bg-blue-600 mx-auto flex items-center justify-center my-2 rounded-md text-black font-bold">Next Joke</button>
                        </div>
                    </div>

                </>}
        </>
    )
}

export default Dialogbox
