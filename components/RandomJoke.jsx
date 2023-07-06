"use client"

import React, { useEffect, useState } from 'react'
import Category from './Category';
import Dialogbox from './Dialogbox';

const RandomJoke = () => {
    const [joke, setJoke] = useState([]);
    const [dialog, setDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedCategoryname, setSelectedCategoryName] = useState("");


    const FetchJoke = async (category) => {
        setLoading(true);
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const jokedata = await response.json();
        setJoke(jokedata);
        setLoading(false);
    };

    useEffect(() => {
        FetchJoke(selectedCategory);
    }, [selectedCategory]);

    return (
        <>
            <main className="bg-gradient-to-r from-[#417fe4] to-[#394761] min-h-screen relative">
                <div className="text-center h-16">
                    <p className="text-[#22c55e] text-4xl  font-bold p-3 pt-6 animate-bounce h-full">
                        Chuck Norries
                    </p>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-2 md:max-w-lg lg:grid-cols-4 lg:max-w-screen-lg place-items-center h-auto gap-6 max-w-sm md:gap-10 mx-auto px-6 mt-6">
                    <Category
                        dialog={dialog}
                        setDialog={setDialog}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <Dialogbox
                        dialog={dialog}
                        setDialog={setDialog}
                        selectedCategory={selectedCategory}
                        loading={loading}
                        FetchJoke={FetchJoke}
                        joke={joke}
                    />
                </div>
            </main>



        </>
    )
}

export default RandomJoke
