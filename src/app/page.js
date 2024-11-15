import Image from "next/image";
import Link from "next/link";
import Meny from "@/app/components/Meny";

export default function Home() {
  return (
    <body>
      <Meny />
      <br></br>
      <main className="col-start-2">
        <div className="max-h-svh col-span-full">
          <Image
            width={1500}
            height={1500}
            alt="Forside billede"
            src="/images/forside_img.jpg"
          ></Image>
        </div>
      </main>
    </body>
  );
}
