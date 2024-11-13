"use client";

import { preMatchedData, shuffleArray } from "@/lib/matchingGame";
import { useEffect, useState } from "react";

export default function BoxMatching() {
  const [shuffledMatchData, setShuffledMatchData] = useState(preMatchedData);
  const [pairedData, setPairedData] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    setShuffledMatchData(shuffleArray(shuffleArray(preMatchedData)));
  }, []);

  function handleCapitalClick(match) {
    if (match === selectedMatch) {
      const newPairedMatch = [...pairedData, match];
      setPairedData(newPairedMatch);
    }
    setSelectedMatch(null);
  }
  const isMatched = (match) =>
    pairedData.some((pairedMatch) => pairedMatch === match);

  const win = pairedData.length === preMatchedData.length;
  return (
    <>
      {win && <h2 className="relative text-xl text-black">You Win!</h2>}
      <div className="flex gap-5 mt-10">
        <div className="flex flex-col gap-2">
          {preMatchedData.map((match, index) => (
            <button
              className={` flex flex-col
            rounded px-4 py-2 w-[30vw] h-[10vh] text-white font-bold
            hover:bg-gray-700 hover:scale-105 transition ease-in duration-300
            ${isMatched(match) ? "bg-green-950" : "bg-gray-500"}
            ${selectedMatch === match && "bg-gray-900"}
            `}
              key={index}
              onClick={() => setSelectedMatch(match)}
            >
              {match.country}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {shuffledMatchData.map((match, index) => (
            <button
              className={`flex flex-col
            bg-gray-500 rounded px-4 py-2 w-[30vw] h-[10vh] text-white font-bold
            ${
              selectedMatch !== null
                ? "hover:bg-gray-700 hover:scale-105 transition ease-in duration-300"
                : "cursor-default"
            }
            ${isMatched(match) ? "bg-green-950" : "bg-gray-500"}
            `}
              key={index}
              disabled={selectedMatch === null}
              onClick={() => handleCapitalClick(match)}
            >
              {match.capital}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
