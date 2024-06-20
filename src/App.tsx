import React from "react";
import "@fontsource-variable/playfair-display";
import DataType from "./interfaces/DataInterface";
import data from "./data.ts";

import PostCard from "./components/PostCard.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const travelData: DataType[] = data;

  const travelElements = travelData.map((post: any) => {
    return <PostCard post={{ ...post }} />;
  });

  return (
    <>
      <main className=" main-content bg-[#f9f9f9]">
        <header className="main-header bg-[#3a506b] w-full p-2 text-center grid gap-5 text-white">
          <h1 className="lowercase font-semibold text-2xl font-playfair">
            Travel Blog
          </h1>
          <p className="font-lato">
            Welcome to my travel blog! Here you'll find all the places I've
            visited and the things I've seen.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-2 py-8">
          {travelElements}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
