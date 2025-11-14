import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        api.get("/show").then(res => setShows(res.data.shows));
    }, []);

    return (
        <div className="p-6">
            <Link to="/admin/create" className="bg-red-500 px-4 py-2 rounded-lg">
                + Tambah Show
            </Link>

            <div className="mt-6">
                {shows.map(s => (
                    <div key={s._id} className="bg-[#1a1a1a] p-4 rounded-lg mb-4 flex justify-between">
                        <div>
                            <p className="text-lg font-bold">{s.name}</p>
                        </div>
                        <Link to={`/admin/edit/${s._id}`} className="text-blue-400">
                            Edit
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
