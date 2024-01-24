"use client";
import { useState } from "react";

export default function Home() {
  const [playerPicked, setPlayerPicked] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState([
    {
      id: 2,
      name: "paper",
      image: "/icon-paper.svg",
      borderColor: "purple",
      picked: false,
    },
    {
      id: 3,
      name: "scissors",
      image: "/icon-scissors.svg",
      borderColor: "yellow",
      picked: false,
    },
    {
      id: 1,
      name: "rock",
      image: "/icon-rock.svg",
      borderColor: "red",
      picked: false,
    },
  ]);

  return (
    <main className="bg h-screen py-8 flex flex-col justify-between px-6">
      <div className=" container mx-auto space-y-16">
        <section className="flex justify-between px-3 rounded-xl border w-3/4 h-24 mx-auto items-center ">
          <div className="flex flex-col items-start uppercase -space-y-3 font-bold text-2xl tracking-tighter">
            <h2>rock</h2>
            <h2>paper</h2>
            <h2>scissors</h2>
          </div>

          <div className="bg-[#f5f5f5] rounded-md w-1/4 md:w-1/6 flex flex-col items-center py-3 text-scoreText">
            <h3 className="uppercase text-xs tracking-wider">score</h3>
            <h3 className="uppercase text-3xl font-bold tracking-tighter">
              {score}
            </h3>
          </div>
        </section>

        {!playerPicked ? (
          <section className="flex flex-wrap max-w-[65%]  md:max-w-[40%] mx-auto gap-y-16 gap-x-28 items-center justify-center space-x-4 ">
            {data.map((item) => {
              return (
                <button
                key={item.id}
                  onClick={() => setPlayerPicked(true)}
                  className={`p-4 border ${item.borderColor === "purple" ? "bg-paperGradient1" : item.borderColor === "red" ? "bg-rockGradient1" : "bg-scissorsGradient1"} rounded-full`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="bg-white p-3 rounded-full w-24 h-24"
                    id="paper"
                  />
                </button>
              );
            })}
          </section>
        ) : (
          <div className="flex justify-center items-center space-x-8">
            <button className="p-2 bg-paperGradient2 rounded-full">
              <img
                src="/icon-paper.svg"
                alt="paper"
                className="bg-white p-3 rounded-full w-24 h-24"
              />
            </button>

            <div className="flex text-xl space-y-4 uppercase flex-col items-center font-bold">
              <h2 className="text-red-600">You lost!</h2>
              <button
                onClick={() => setPlayerPicked(false)}
                className="uppercase text-white border border-white px-4 rounded-md py-2 hover:bg-white hover:text-black"
              >
                play again
              </button>
            </div>

            <button className="p-2 bg-scissorsGradient2 rounded-full">
              <img
                src="/icon-scissors.svg"
                alt="paper"
                className="bg-white p-3 rounded-full w-24 h-24"
              />
            </button>
          </div>
        )}
      </div>
      <button className="uppercase text-white self-end border border-white px-4 rounded-md py-1 hover:bg-white hover:text-black">
        rules
      </button>
    </main>
  );
}
