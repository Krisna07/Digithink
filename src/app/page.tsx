import Customers from "./Components/Homepage/Customers";
import Digital from "./Components/Homepage/Digital";
import Herosection from "./Components/Homepage/Herosection";
import Homeservices from "./Components/Homepage/Homeservices";
import Social from "./Components/Homepage/social";

export default function Home() {
  return (
    <main className="w-full grid-place-items-center">
      <Herosection />
      <Digital />
      <Homeservices />
      <Social />
      <Customers />
    </main>
  );
}
