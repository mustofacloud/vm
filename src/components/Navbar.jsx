import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, login } = useContext(AuthContext);

    return (
        <nav className="px-4 md:px-6 py-3 md:py-4 bg-black/40 backdrop-blur border-b border-white/10 flex justify-between items-center sticky top-0 z-50">
            <div className="text-lg md:text-2xl font-bold">JKT48 Theater</div>

            <div>
                {user ? (
                    <p className="text-xs md:text-sm opacity-70">{user.username}</p>
                ) : (
                    <button
                        onClick={login}
                        className="bg-red-500 px-3 md:px-4 py-2 text-sm md:text-base rounded-lg hover:bg-red-600 transition"
                    >
                        Login Discord
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
