import React from 'react'

const Category = ({ dialog, setDialog, selectedCategory, setSelectedCategory }) => {
    const categories = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];
    return (
        <>
            {categories.map((category) => (
                <div
                    key={category}
                    onClick={() => {
                        setDialog(!dialog);
                        setSelectedCategory(category);

                    }}
                    className={`bg-gray-100 p-1 w-16 md:p-5 space-x-4 h-auto md:w-60 md:h-40 space-y-0.5 rounded-lg scale-100 hover:scale-[99%] text-center flex flex-col items-center justify-center border shadow-xl border-gray-500 mx-auto cursor-pointer hover:border-black ${dialog && selectedCategory === category && "bg-gray-300/60"}`}
                >
                    <h1 className="font-bold text-sm md:text-2xl text-blue-900 capitalize">{category}</h1>
                    <p className="text-sm  hidden md:inline-block text-purple-800 capitalize w-full ">Unlimited jokes on {category}</p>
                </div>
            ))}
        </>
    )
}

export default Category
