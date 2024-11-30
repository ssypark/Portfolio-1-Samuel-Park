import { Outlet } from "react-router-dom"
import Header from "./global/Header";
import Footer from "./global/Footer";


// this component is the main layout for the app
// it contains the header and footer along with the main content
function Layout() {
    return(
        <>
            <Header />
            <main className="min-h-screen">
                {/* This is where the main content is rendered.
                It is rendered using the Outlet component and is sandwiched between the header and footer */}
                <Outlet />
            </main>
            <Footer />


        </>
    )
};

export default Layout;