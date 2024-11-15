import Link from "next/link";

export default function Meny() {
  return (
    <nav>
      <ul className={`flex justify-evenly p-2 bg-card`}>
        <Link href={"/"}>
          <li className="font-bold hover:underline">Home</li>
        </Link>
        <Link href={"/pages/products"}>
          <li className="font-bold hover:underline">Products</li>
        </Link>
      </ul>
    </nav>
  );
}
