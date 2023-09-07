import ComingSoonImage from "../assets/SIMG.jpeg";
import NavBar from "./Navbar";

export default function ComingSoon() {
  return (
    <>
    <NavBar />
    <div
      className="bg-cover bg-center bg-cyan-900 h-screen flex flex-col justify-center text-white">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold">
        Coming Soon
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center mt-4">
        We're working on something amazing. Stay tuned!
      </p>
    </div>
    </>
  );
}
