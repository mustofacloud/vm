import { useEffect, useState } from "react";
import { getShows } from "../api/shows";
import ShowCard from "../components/ShowCard";

const Home = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                setLoading(true);
                const data = await getShows();
                // API mengembalikan array langsung
                setShows(Array.isArray(data) ? data : data.shows || []);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch shows:", err);
                setError("Gagal memuat data pertunjukan. Pastikan server backend sedang berjalan.");
                setShows([]);
            } finally {
                setLoading(false);
            }
        };
        fetchShows();
    }, []);

    return (
        <div className="min-h-screen">
            {loading && (
                <div className="p-8 text-center">
                    <p className="text-gray-400">Memuat pertunjukan...</p>
                </div>
            )}
            
            {error && (
                <div className="p-4 m-4 bg-red-900/20 border border-red-500 rounded-lg">
                    <p className="text-red-400">{error}</p>
                    <p className="text-sm text-gray-400 mt-2">Pastikan backend server sedang berjalan di http://darli.hidencloud.com:24624</p>
                </div>
            )}
            
            {!loading && shows.length === 0 && !error && (
                <div className="p-8 text-center text-gray-400">
                    <p>Tidak ada pertunjukan tersedia saat ini.</p>
                </div>
            )}

            {shows.length > 0 && (
                <div className="p-4 md:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
                    {shows.map(show => (
                        <ShowCard key={show._id} show={show} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
