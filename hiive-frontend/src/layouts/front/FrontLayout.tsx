import { Outlet } from "react-router"
import Navbar from "./Navbar.tsx"

export function FrontLayout() {
    return (
        <>
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        </>
    )
}
