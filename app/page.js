"use client";
import { useState } from "react";

export default function Home() {
  const [playerPicked, setPlayerPicked] = useState(false);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState({
    id: "",
    name: "",
    image: "",
    borderColor: "",
    picked: "",
    power: "",
  });
  const [win, setWin] = useState({ won: false, drew: false });
  const [computerPick, setComputerPick] = useState({
    id: "",
    name: "",
    image: "",
    borderColor: "",
    picked: "",
    power: "",
  });
  const [data, setData] = useState([
    {
      id: "2",
      name: "paper",
      image: "/icon-paper.svg",
      borderColor: "purple",
      picked: false,
      power: 1,
    },
    {
      id: "3",
      name: "scissors",
      image: "/icon-scissors.svg",
      borderColor: "yellow",
      picked: false,
      power: 2,
    },
    {
      id: "1",
      name: "rock",
      image: "/icon-rock.svg",
      borderColor: "red",
      picked: false,
      power: 3,
    },
  ]);

  const handleClick = (event) => {
    setPlayerPicked(true);
    const { id } = event.target;
    data.map((item) => {
      if (id === item.id) {
        setPicked(item);
      }
    });

    const answer = Math.floor(Math.random() * 3);
    setComputerPick(answer);

    if (picked.name.includes("paper") && data[answer].name.includes("rock")) {
      setWin({ won: true, drew: false, lost: false });
    } else if (
      picked.name.includes("rock") &&
      data[answer].name.includes("paper")
    ) {
      setWin({ won: false, drew: false, lost: true });
    } else if (picked.power > data[answer].power) {
      setWin({ won: true, drew: false, lost: false });
    } else if (picked.name === data[answer].name) {
      setWin({ won: false, drew: true, lost: false });
    } else {
      setWin({ won: false, drew: false, lost: true });
    }


      if(win.won){
        setScore(score + 1)
      }
  };

  console.log(score)

  return (
    <main className="bg h-screen py-8 flex flex-col justify-between px-6">
      <div className=" container mx-auto flex flex-col sm:space-y-16 space-y-32">
        <section className="flex justify-between px-3 rounded-xl border md:w-3/4 w-full h-24 mx-auto items-center ">
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
          <section className="flex flex-wrap justify-center items-center max-w-[90%] border  sm:max-w-[65%] lg:max-w-[40%] mx-auto gap-y-16 sm:gap-x-28 gap-x-16 ">
            {data.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={handleClick}
                  className={`p-4 border ${
                    item.borderColor === "purple"
                      ? "bg-paperGradient1"
                      : item.borderColor === "red"
                      ? "bg-rockGradient1"
                      : "bg-scissorsGradient1"
                  } rounded-full`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="bg-white p-3 rounded-full w-24 h-24"
                    id={item.id}
                  />
                </button>
              );
            })}
          </section>
        ) : (
          <div className="flex flex-wrap justify-center items-center max-w-[100%] border  sm:max-w-[65%] lg:max-w-[40%] mx-auto gap-y-16 sm:gap-x-28 gap-x-16">
            <div className="flex flex-col items-center text-lg uppercase gap-y-6">
              <h2 className="order-last sm:order-first">You picked</h2>

              <button
                key={picked.id}
                onClick={handleClick}
                className={`p-4 border ${
                  picked.borderColor === "purple"
                    ? "bg-paperGradient1"
                    : picked.borderColor === "red"
                    ? "bg-rockGradient1"
                    : "bg-scissorsGradient1"
                } rounded-full`}
              >
                <img
                  src={picked.image}
                  alt={picked.name}
                  className="bg-white p-3 rounded-full w-24 h-24"
                  id={picked.id}
                />
              </button>
            </div>

            <div className="flex flex-col items-center text-md uppercase gap-y-6">
              <h2 className="order-last sm:order-first">computer</h2>

              <button
                className={`p-4 border ${
                  data[computerPick].borderColor === "purple"
                    ? "bg-paperGradient1"
                    : data[computerPick].borderColor === "red"
                    ? "bg-rockGradient1"
                    : "bg-scissorsGradient1"
                } rounded-full`}
              >
                <img
                  src={data[computerPick].image}
                  alt={data[computerPick].name}
                  className="bg-white p-3 rounded-full w-24 h-24"
                />
              </button>
            </div>

            <div className="flex space-y-4 uppercase flex-col items-center font-extrabold">
              <h2
                className={`${
                  win.won
                    ? "text-green-600"
                    : win.drew
                    ? "text-white"
                    : win.lost
                    ? "text-red-600"
                    : ""
                } text-3xl`}
              >
                {win.won
                  ? "you Won!"
                  : win.drew
                  ? "DRAWWWW"
                  : win.lost
                  ? "you lost!"
                  : ""}
              </h2>
              <button
                onClick={() => {
                  setPlayerPicked(false);
                  setWin(false);
                }}
                className="uppercase text-white border border-white px-4 rounded-md py-2 hover:bg-white hover:text-black"
              >
                play again
              </button>
            </div>
          </div>
        )}
      </div>

      <button className="uppercase text-white self-end border border-white px-4 rounded-md py-1 hover:bg-white hover:text-black">
        rules
      </button>
    </main>
  );
}
