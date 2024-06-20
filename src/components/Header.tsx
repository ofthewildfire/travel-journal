import React from "react";

const Header = () => {
  return (
    <header className="main-header bg-[#3a506b] w-full p-2 text-center grid gap-5 text-white">
      <h1 className="lowercase font-semibold text-2xl font-playfair">
        Travel Blog
      </h1>
      <p className="font-lato">
        Welcome to my travel blog! Here you'll find all the places I've visited
        and the things I've seen.
      </p>
    </header>
  );
};

export default Header;
