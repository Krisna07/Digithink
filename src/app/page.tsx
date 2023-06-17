import Image from "next/image";
import Herosection from "./Components/Homepage/Herosection";

export default function Home() {
  return (
    <main className="w-full grid-place-items-center">
      <Herosection />
      <div className="w-full grid place-items-center">
        <div className="md:w-[80%]">
          <div>
            <h4></h4>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
