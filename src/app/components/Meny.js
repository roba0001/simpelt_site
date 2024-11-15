import Link from "next/link";

export default function Meny() {
  return (
    <nav className="bg-[rgb(242, 232, 206)]">
      <ul className="flex justify-evenly p-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
