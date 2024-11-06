import React from "react";

function Home() {
    return (
        <div >
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-4 md:grid-cols-12 gap-4">
                        <div className="col-span-4 md:col-span-6 bg-white p-4 shadow rounded">
                        <p className="text-xl">I am 8 columns on mobile, 6 on desktop</p>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 bg-white p-4 shadow rounded">
                        <p>I am 4 columns on mobile, 6 on desktop</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;