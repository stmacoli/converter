import React from "react";
import exchangeLogo from "./assets/exchangeLogo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-400 to-sky-700 text-white py-10 flex flex-col items-center">
      <img src={exchangeLogo} alt="Exchange Logo" className="w-15 sm:w-35 md:w-35 lg:w-35" />
      <h1 className="text-center text-3xl font-bold ">Conversor de Moedas</h1>
    </header>
  );
};

export default Header;
