import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#030014] px-4 py-16 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="font-mono font-bold text-6xl sm:text-8xl tracking-tight text-white" style={{ textShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}>
          404
        </div>

        <div className="flex justify-center -mt-4">
          <img
            alt="404 - Page Not Found"
            className="pixelated"
            height={200}
            src="https://www.8bitcn.com/_next/image?url=%2Fimages%2F8bit-ogre.png&w=256&q=75&dpl=dpl_B9Q5u7DD6qZpoCz3VRwuR19npVHK"
            width={200}
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <h1 className="font-mono font-bold text-2xl sm:text-4xl tracking-tight text-white">
          You made the Ogre angry!
        </h1>

        <p className="font-mono text-zinc-400 text-xs max-w-md">
          This page doesn&apos;t exist. The site might be down, or you&apos;ve wandered into the void. Turn back before it&apos;s too late.
        </p>

        <div className="flex justify-center mt-4">
          <Link href="/">
            <button className="px-8 py-3 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-sm uppercase tracking-widest hover:bg-indigo-500/30 hover:border-indigo-500/50 hover:scale-105 transition-all duration-300 cursor-pointer">
              Return to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
