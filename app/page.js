import Image from "next/image";

export default function Home() {
  return (
    <main className="bg h-screen py-8 flex flex-col justify-between px-6">
      <div className=" container mx-auto space-y-16">
        <section className="flex justify-between px-3 rounded-xl border w-3/4 h-24 mx-auto items-center ">
          <div className="flex flex-col items-start uppercase -space-y-3 font-bold text-2xl tracking-tighter">
            <h2>rock</h2>
            <h2>paper</h2>
            <h2>scissors</h2>
          </div>

          <div className="bg-[#f5f5f5] rounded-md w-1/4 flex flex-col items-center py-3 text-scoreText">
            <h3 className="uppercase text-xs tracking-wider">score</h3>
            <h3 className="uppercase text-3xl font-bold tracking-tighter">
              12
            </h3>
          </div>
        </section>

        <section className="flex flex-col space-y-8 items-center justify-center">
          <div className="flex justify-center items-center space-x-12">
            <button className="p-2 bg-paperGradient2 rounded-full">
              <img
                src="/icon-paper.svg"
                alt="paper"
                className="bg-white p-3 rounded-full w-16 h-16"
              />
            </button>
            <button className="p-2 bg-scissorsGradient2 rounded-full">
              <img
                src="/icon-scissors.svg"
                alt="paper"
                className="bg-white p-3 rounded-full w-16 h-16"
              />
            </button>
          </div>

          <button className="p-2 bg-rockGradient2 rounded-full">
            <img
              src="/icon-rock.svg"
              alt="paper"
              className="bg-white p-3 rounded-full w-16 h-16"
            />
          </button>
        </section>
      </div>
      <button className="uppercase text-white self-end border border-white px-4 rounded-md py-1 hover:bg-white hover:text-black">
        rules
      </button>
    </main>
  );
}
