import { Link } from "react-router-dom";

const ShowCard = ({ show }) => (
    <Link to={`/show/${show._id}`} className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition duration-300 flex flex-col h-full">
        <img 
            src={show.thumbnail || show.thumbnailUrl || "https://via.placeholder.com/300x200?text=No+Image"} 
            alt={show.name} 
            className="w-full h-40 md:h-56 object-cover" 
        />
        <div className="p-3 md:p-4 flex-1 flex flex-col justify-between">
            <div>
                <h2 className="text-base md:text-lg font-bold line-clamp-2">{show.name}</h2>
                <p className="text-xs md:text-sm opacity-70 mt-1">{new Date(show.date).toLocaleString()}</p>
            </div>
            <p className="mt-3 md:mt-4 font-semibold text-red-400 text-sm md:text-base">Rp {show.price.toLocaleString()}</p>
        </div>
    </Link>
);

export default ShowCard;
