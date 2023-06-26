import Customers from "./Components/Homepage/Customers";
import Digital from "./Components/Homepage/Digital";
import Goal from "./Components/Homepage/Goal";
import Herosection from "./Components/Homepage/Herosection";
import Homeservices from "./Components/Homepage/Homeservices";
import Requestform from "./Components/Homepage/Requestform";
import Social from "./Components/Homepage/social";

export default function Home() {
  return (
    <main className="w-full grid-place-items-center">
      <div className="w-full py-8   p-4 bg-gradient-to-r from-black to-slate-900 grid place-items-center box-border text-center gap-4 relative">
        <Herosection />
      </div>
      <div className="w-full py-8   p-4 grid place-items-center box-border text-center gap-4 relative">
        <Goal />
      </div>
      <div className="w-full py-8   p-4 grid place-items-center box-border text-center gap-4 relative">
        <Digital />
      </div>
      <div className="w-full py-8   p-4 grid place-items-center box-border text-center gap-4 relative">
        <Homeservices />
      </div>
      <div className="w-full py-8   p-4 grid place-items-center box-border text-center gap-4 relative">
        <Social />
      </div>
      <div className="w-full py-8 skew-y-[-2deg] bg-slate-200  p-4 grid place-items-center box-border text-center gap-4 relative">
        <Customers />
      </div>
      <div className="w-full py-8   p-4 grid place-items-center box-border text-center gap-4 relative">
        <Requestform />
      </div>
    </main>
  );
}
