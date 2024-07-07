import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto my-auto px-3 py-10">
      <div className="bg-white rounded-3xl flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 p-12 sm:p-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green">fundfolio<span className="text-red">.</span></h1>
          <p className="text-base md:text-xl max-w-lg text-slate-500">Manage your transactions and notes effortlessly with fundfolio. Stay organized with a beautiful UI and detailed statistics.</p>
          <Link target="_blank" href={"https://play.google.com/"} className='bg-green px-4 py-2 sm:py-3 rounded-full w-36 text-white sm:text-lg text-base text-center flex items-center gap-1 shadow hover:shadow-md transition-all'>
            Download
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
              <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
            </svg>
          </Link>
        </div>
        <div className="p-10 order-first md:order-last">
          <Image src={"/assets/fundfolio.ui.png"} alt="Fundfolio" width={600} height={600} />
        </div>
      </div>
    </section>
  );
}
