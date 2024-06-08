import Link from "next/link";
export default async function Home() {

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Link href='/login'>
      <button
        className="rounded-full bg-slate-500/80 px-24 py-3 my-2 font-semibold transition hover:bg-white/20 "
        >
        Login
      </button>
        </Link>
    </main>
  );
}

