import React from "react";
import githublogo from "./assets/githublogo.png"
import linkedinlogo from "./assets/linkedinlogo.png"
import Contact from "./components/Contact";


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-sky-400 to-sky-700 text-white py-2 flex flex-col items-center">
            <h1 className="text-center text-xl sm:text-xl md:text-1xl lg:text-1xl xl:text-2xl font-bold mb-2">Sobre Steven M. Oliveira:</h1>


            <div className="flex space-x-25 sm:space-x-60 md:space-x-80 lg:space-x-100 2xl:space-x-150">
                <Contact name="stmacoli"
                    href="https://github.com/stmacoli"
                    logo={githublogo}
                    className="mb-4"
                />
                <Contact
                    name="Steven Oliveira"
                    href="https://www.linkedin.com/in/steven-machado-oliveira/"
                    logo={linkedinlogo}
                />
            </div>


        </footer>
    );
};

export default Footer;