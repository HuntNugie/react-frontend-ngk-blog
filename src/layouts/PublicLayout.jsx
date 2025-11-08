import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function PublicLayout(){
    return (
        <>
            <Navbar/>
            <main className="p-1">
                <Outlet/>
            </main>
        </>
    )
}