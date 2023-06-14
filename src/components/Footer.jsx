import React from "react";

export default function Footer() {
  return (
    <footer className="bg-yellow-500 shadow-md p-5 fixed bottom-0 w-full">
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-white font-semibold text-xl">
          Made By Jatin Bhandari 🧑‍💻 using React ⚛️🚀{" "}
        </h1>
      </div>
      <div className="w-full h-1 transform -translate-y-1 bg-yellow-500 shadow-md"></div>
    </footer>
  );
}
