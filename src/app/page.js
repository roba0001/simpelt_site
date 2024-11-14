import Image from "next/image";
import Link from "next/link";
import Meny from "@/app/components/Meny";

export default function Home() {
  return (
    <body>
      <Meny />
      <br></br>
      <main className="col-start-2">
        <div className="col-span-full z-index 1">
          <Image
            width={1500}
            height={100}
            alt="Forside billede"
            src="/images/forside_img.jpg"
          ></Image>
        </div>
        <div className="col-span-full z-index 2">
          <h1>Simple Store</h1>
          <Link href={"pages/products"}>See products!</Link>
        </div>
      </main>
    </body>
  );
}
