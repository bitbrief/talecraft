import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white font-sans">
      <Navbar />
      <div className="w-full bg-slate-800 h-1 mt-2"></div>
      <div className="bg-purple-600 w-full h-6 flex justify-center font-semibold"> We are still in the development phase. Stay tuned for exciting updates! </div>
      <Header />
    </div>
  );
}
