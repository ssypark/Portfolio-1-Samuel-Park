
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css"


function Header() {
    return (
        <header>
            <div className="container">
                <div className={styles.header}>
                <img className={styles.headerImage} src={logo} alt="logo!"></img>
            <nav className={styles.headerNav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
                </div>
            </div>
            
        </header>
    );

}

export default Header;