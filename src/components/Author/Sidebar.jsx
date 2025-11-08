import ButtonNavigation from "./ButtonNavigation";
import HeaderSidebar from "./HeaderSidebar";

const Sidebar = () => {
    return (
        <>
            <aside className="w-64 h-screen bg-gray-900 text-gray-200 flex flex-col border-r border-gray-800">
                {/* Header Profile */}
                <div className="px-6 py-6 border-b border-gray-800">
                    <HeaderSidebar/>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 space-y-1">
                    <ButtonNavigation path="/dashboard" name="Dashboard" />
                    <ButtonNavigation path="/#" name="Daftar Postingan" />
                    <ButtonNavigation path="/#" name="Buat Postingan" />
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
