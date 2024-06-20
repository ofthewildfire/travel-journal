import React from "react";
import "@fontsource-variable/playfair-display";
import DataType from "./interfaces/DataInterface";
import data from "./data.ts";
// import ThemeButton from "./components/ThemeButton.tsx";
import Header from "./components/Header.tsx";
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
        {/* <ThemeButton /> */}
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-2 py-8">
          {travelElements}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
