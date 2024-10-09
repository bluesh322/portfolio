import Image from "next/image";
import bg from "../../public/background/Home-Background.png";
import RenderModel from "@/app/components/RenderModel";
import Peacock from "@/app/components/models/Peacock";
import Navigation from "@/app/components/navigation/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-70"
      />
      <div className="w-full h-screen">
        {/* Navigation and 3d model */}
        <Navigation/>
        <RenderModel>
          <Peacock/>
        </RenderModel>
      </div>
    </main>
  );
}
