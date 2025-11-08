import {Outlet} from "react-router-dom";
import Sidebar from "../components/Author/Sidebar";

export default function AuthorLayout() {
    return (
        <>
            <div className="flex h-screen bg-gray-100 overflow-hidden">
                <Sidebar/>
                {/* MAIN CONTENT AREA */}
                <div className="flex-1 p-8 overflow-y-auto space-y-16">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}
