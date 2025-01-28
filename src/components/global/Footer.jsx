import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full bg-olivewhite text-ink py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <p className="text-sm text-ink font-workSans">Gone Fishing. &copy; {currentYear} Samuel Park</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;