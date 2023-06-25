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
      <Herosection />
      <Goal />
      <Digital />
      <Homeservices />
      <Social />
      <Customers />
      <Requestform />
    </main>
  );
}
