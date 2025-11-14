import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const ShowDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, login } = useContext(AuthContext);

    const [show, setShow] = useState(null);

    useEffect(() => {
        api.get(`/show/${id}`).then(res => setShow(res.data.show));
    }, []);

    const checkout = async () => {
        if (!user) return login();

        const res = await api.post("/transaction/create", { showId: id });
        window.location.href = res.data.redirect_url;
    };

    if (!show) return <p className="p-6">Loading...</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <img src={show.thumbnailUrl} className="rounded-lg mb-4" />
            <h1 className="text-3xl font-bold">{show.name}</h1>
            <p className="opacity-80">{new Date(show.date).toLocaleString()}</p>
            <p className="mt-4 text-xl font-bold">Rp {show.price.toLocaleString()}</p>

            <button
                onClick={checkout}
                className="mt-6 bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 text-lg"
            >
                Beli Tiket
            </button>
        </div>
    );
};

export default ShowDetail;
