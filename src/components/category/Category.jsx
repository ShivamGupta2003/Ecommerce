import { useNavigate } from "react-router-dom"; // Corrected import

const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'Fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'Shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'Mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'Shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'Home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Books'
    }
];

const Category = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    <div className="flex">
                        {category.map((item, index) => (
                            <div key={index} className="px-3 lg:px-10">
                                <div
                                    onClick={() => navigate(`/category/${item.name.toLowerCase()}`)} // Ensure route matches lowercase names
                                    className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer flex items-center justify-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 lg:w-20 lg:h-20"
                                    />
                                </div>
                                <h1 className="text-sm lg:text-lg text-center font-medium title-font">
                                    {item.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Moved CSS to a styled component */}
            <style>
                {`
                .hide-scroll-bar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, and Opera */
                }
                `}
            </style>
        </div>
    );
};

export default Category;