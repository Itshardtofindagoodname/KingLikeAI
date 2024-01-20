import React from "react";

const Footer = () => {
    return (
        <div className="bg-neutral-900">
            <footer className="bg-neutral-900 rounded-lg m-4">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <p className="text-gray-400">If you want to know more about me and my works</p>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                        <li>
                            <a href="https://github.com/Itshardtofindagoodname" target="_blank" className="hover:underline me-4 md:me-6">Github</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/pirouette_of_philomel/" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/justsome01else" target="_blank" className="hover:underline me-4 md:me-6">X</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/debarjun-thakur-313288250/" target="_blank" className="hover:underline">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    );
}

export default Footer;