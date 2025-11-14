import { useState } from "react";
import api from "../api/axios";

const AdminCreateShow = () => {
    const [data, setData] = useState({
        name: "",
        price: "",
        date: "",
        discordRoleId: "",
    });

    const [thumbnail, setThumbnail] = useState(null);

    const submit = async e => {
        e.preventDefault();
        const fd = new FormData();

        Object.keys(data).forEach(k => fd.append(k, data[k]));
        fd.append("thumbnail", thumbnail);

        await api.post("/show/create", fd, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        alert("Show Created");
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <form onSubmit={submit} className="space-y-4">
                <input className="w-full p-2 bg-[#1a1a1a]" placeholder="Nama Show"
                    onChange={e => setData({ ...data, name: e.target.value })} />

                <input className="w-full p-2 bg-[#1a1a1a]" placeholder="Harga"
                    onChange={e => setData({ ...data, price: e.target.value })} />

                <input type="datetime-local" className="w-full p-2 bg-[#1a1a1a]"
                    onChange={e => setData({ ...data, date: e.target.value })} />

                <input className="w-full p-2 bg-[#1a1a1a]" placeholder="Discord Role ID"
                    onChange={e => setData({ ...data, discordRoleId: e.target.value })} />

                <input type="file" onChange={e => setThumbnail(e.target.files[0])} />

                <button className="bg-red-500 px-4 py-2 rounded-lg w-full">Submit</button>
            </form>
        </div>
    );
};

export default AdminCreateShow;
