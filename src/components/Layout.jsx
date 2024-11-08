import { Outlet } from "react-router-dom"
import Header from "./global/Header";
import Footer from "./global/Footer";


function Layout() {
    return(
        <>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />


        </>
    )
};

export default Layout;