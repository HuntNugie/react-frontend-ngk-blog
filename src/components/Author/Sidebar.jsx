const Sidebar = () => {
    return (
        <>
            <aside className="w-64 h-screen bg-gray-900 text-gray-200 flex flex-col border-r border-gray-800">
                {/* Header Profile */}
                <div className="px-6 py-6 border-b border-gray-800">
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">Nama Author</span>
                        <span className="text-sm text-gray-400">Author</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 space-y-1">
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
                        Dashboard
                    </a>

                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
                        Daftar Postingan
                    </a>

                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
                        Buat Postingan
                    </a>
                </nav>

                {/* Footer / Logout */}
                <div className="px-4 py-6 border-t border-gray-800">
                    <button className="w-full py-2 rounded bg-red-600 hover:bg-red-700 transition text-sm font-semibold">
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
