
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
// import styles from "./Header.module.css"


function Header() {
    return (
        <header className="bg-olive" >
            <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 text-offwhite font-workSans">                
            <img src={logo} alt="logo" className="max-w-20" />
            <nav>
                <ul className="list-none flex gap-4 ">
                    <li className="text-offwhite hover:text-redwood">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-offwhite hover:text-redwood">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="text-offwhite hover:text-redwood">
                        <Link to="/work">Work</Link>
                    </li>
                </ul>
            </nav>
            </div>


        </header>
    );

}

export default Header;