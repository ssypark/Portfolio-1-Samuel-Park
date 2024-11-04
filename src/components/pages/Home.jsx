import React from "react";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.home}>
            <div className="container">
                <div className="grid">
                    <div className="col-8 col-6-md">
                        <p>I am 8 columns on mobile, 6 on desktop</p>
                    </div>
                    <div className="col-4 col-6-md">
                        <p>I am 4 columns on mobile, 6 on desktop</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;