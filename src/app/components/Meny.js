import Link from "next/link";

export default function Meny() {
  return (
    <nav>
      <ul className={`flex justify-evenly p-2 bg-orange-200`}>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/pages/products"}>
          <li>Products</li>
        </Link>
      </ul>
    </nav>
  );
}
